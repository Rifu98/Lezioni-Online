var fs = require('fs');
const express = require("express");
const mysql = require("mysql");
const { OAuth2Client } = require('google-auth-library');
const nodemailer = require('nodemailer');
var https = require('https');
var privateKey = fs.readFileSync('private.key', 'utf8');
var certificate = fs.readFileSync('certificate.crt', 'utf8');
var app = express();

var credentials = { key: privateKey, cert: certificate };
var httpsServer = https.createServer(credentials, app);
app.use(express.static(__dirname + "/src"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const connection = mysql.createConnection({
  host: "212.237.39.62",
  user: "hdy2jkqq1a",
    password: "P4ss_database",
  database: "th8p38pyf5",
    multipleStatements: true,
});

connection.connect();

connection.on("connect", (err) => {
    if (err) {
        console.log(err);
    }
});

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'federicorifugiato52@gmail.com',
    pass: 'wism oaus ahjn lf'
  },
  tls: {
    rejectUnauthorized: false
  }
});

let mailOptions = {
  from: 'federicorifugiato52@gmail.com',
  to: 'federicorifugiato52@gmail.com',
  subject: 'Nodemailer Project',
  text: 'Hi from your nodemailer project'
};

app.get("/proff", async (req, res) => {
  res.set('Access-Control-Allow-Origin', 'https://www.lezionionline.es');
  let prof = await new Promise((resolve, reject) => connection.query('select * from professori', (err, results) => {
    if (err) {
      reject(err)
    } else {
      resolve(results);
    }
  }));
  for (p of prof) {
    p.materie = []
    let materierow = await new Promise((resolve, reject) => connection.query(`select materie.materia from materie inner join profmat on materie.id = profmat.matid inner join professori on profmat.profid = professori.id where professori.id = ${p.id}`, (err, results) => {
      if (err) {
        reject(err)
      } else {
        resolve(results);
      }
    }));
    for (i = 0; i < materierow.length; i++) {
      p.materie[i] = materierow[i].materia
    }
  }
  res.json(prof)

});

app.post('/signupgoogle', async (req, res) => {
  res.set('Access-Control-Allow-Origin', 'https://www.lezionionline.es');
  const client = new OAuth2Client();
  async function verify() {
    const ticket = await client.verifyIdToken({
      idToken: req.body.credential,
      requireAudience: '908028603275 - ao1q3kp0hvh2ov8qdfm4n8uj0uv06r2l.apps.googleusercontent.com', 
    });
    const payload = ticket.getPayload();

    connection.query(`select * from users where mail = '${payload['email']}';`, (err, result) => {
      if (err) {
        console.log(err)
        res.redirect('https://lezionionline.es/#/servererror')
      } else {
        console.log(result)
        if (!result[0]) {
          connection.query(`INSERT INTO users (nome, cognome, mail, google) VALUES ('${payload['name'].split(/(\s+)/)[0]}', '${payload['name'].split(/(\s+)/)[2]}', '${payload['email']}', true);`, (err, result) => {
            if (err) {
              console.log(err)
              res.redirect('https://lezionionline.es/#/servererror')
            } else {
              res.redirect(`https://lezionionline.es/#/googlepass?mail=` + payload['email'])
            }
          })
        } else {
          if (result[0].confirmed == 1) {
            res.redirect('https://lezionionline.es/#/alreadyregistered')
          }
          else {
            res.redirect('https://lezionionline.es/#/verifymail')
          }
        }
      }
    })
  }
  verify().catch(console.error);
})

app.post('/googlepass', async (req, res) => {
  res.set('Access-Control-Allow-Origin', 'https://www.lezionionline.es');

  connection.query(`select * from users where mail = '${req.body.mail}';`, (err, result) => {
    if (err) {
      console.log(err)
      res.json({'stat': 'servererror'})    
    } else {
      if (!result[0]) {
        res.json({ 'stat': 'mailnotregistered' })    
      } else {
        if (result[0].pass == '') {
          connection.query(`UPDATE users SET pass = '${req.body.pass}' WHERE users.mail = '${req.body.mail}';`, (err, result) => {
            if (err) {
              console.log(err)
              res.json({ 'stat': 'servererror' })
            } else {
              res.json({ stat: 'verifymail' })
            }
          })
          transporter.sendMail(mailOptions, function (err, data) {
            if (err) {
              console.log("Error " + err);
            } else {
              console.log("Email sent successfully");
            }
          });
        } else {
          res.json({ 'stat': 'alreadysetupped' })  
        }
      }
    }
  })
})

app.post('/signup', async (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  console.log(req.body)
  connection.query(`select * from users where mail = '${req.body.mail}';`, (err, result) => {
    if (err) {
      console.log(err)
      res.json({ 'stat': 'servererror' })   
    } else {
      console.log(result)
      if (!result[0]) {
        connection.query(`INSERT INTO users (nome, cognome, mail, pass, google) VALUES ('${req.body.nome}', '${req.body.cognome}', '${req.body.mail}', '${req.body.pass}', false);`, (err, result) => {
          if (err) {
            console.log(err)
            res.json({ 'stat': 'servererror' })   
          } else {
              res.json({ stat: 'verifymail' })
          }
        })
        transporter.sendMail(mailOptions, function (err, data) {
          if (err) {
            console.log("Error " + err);
          } else {
            console.log("Email sent successfully");
          }
        });
      } else {
        if (result[0].confirmed == 1) {
          res.json({ stat: 'alreadyregistered' })
        }
        else {
          res.json({ stat: 'verifymail' })
        }
      }
    }
  })
})

app.post('/login', async (req, res) => {
  res.json(req.body)                           //temp
})

app.get("/", (req, res) => {
  console.log('hi')
  res.send('<a href="./proff">proff</a>')
});
httpsServer.listen(3000);
