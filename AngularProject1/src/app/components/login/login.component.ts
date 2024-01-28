import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, NgForm, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform!: FormGroup;
  signupform!: FormGroup;
  hideloginpass = true
  hidesignuppass = true
  hidesignuppass2 = true
  panelOpenState = false;

  ngOnInit() {
    new Promise(resolve => {
      this.loadScript();
    });
    this.loginform = new FormGroup({
      mail: new FormControl('', [Validators.email, Validators.required]),
      pass: new FormControl('', [Validators.required, this.createPasswordStrengthValidator(), Validators.minLength(8)]),
    })
    this.signupform = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      cognome: new FormControl('', [Validators.required]),
      mail: new FormControl('', [Validators.email, Validators.required]),
      pass: new FormControl('', [Validators.required, this.createPasswordStrengthValidator(), Validators.minLength(8)]),
      pass2: new FormControl('', [Validators.required, this.createPasswordStrengthValidator(), Validators.minLength(8)]),
    }, { validators: this.checkpass() })
  }

  public loadScript() {
    const node = document.createElement('script');
    node.src = 'https://accounts.google.com/gsi/client'
    node.type = 'text/javascript';
    node.async = true;
    document.getElementsByTagName('head')[0].appendChild(node);
  }

  getErrorMessageLogin() {
    if (this.loginform.get('mail')!.hasError('required')) {
      return 'Inserire la mail';
    }

    return 'Mail non valida';
  }

  getErrorMessageLoginPass() {
    if (this.loginform.get('pass')!.hasError('upperCase')) {
      return 'Inserire un carattere maiuscolo';
    } else if (this.loginform.get('pass')!.hasError('num')) {
      return 'Inserire un numero';
    } else if (this.loginform.get('pass')!.hasError('simbol')) {
      return 'Inserire un carattere speciale';
    } else if (this.loginform.get('pass')!.hasError('minlength')) {
      return 'Lunghezza minima 8 caratteri';
    }
    return 'Inserire una password';
  }

  getErrorMessageSignup() {
    if (this.signupform.get('mail')!.hasError('required')) {
      return 'Inserire la mail';
    }

    return 'Mail non valida';
  }

  getErrorMessagepass() {
    if (this.signupform.get('pass')!.hasError('upperCase')) {
      return 'Inserire un carattere maiuscolo';
    } else if (this.signupform.get('pass')!.hasError('num')) {
        return 'Inserire un numero';
    } else if (this.signupform.get('pass')!.hasError('simbol')) {
      return 'Inserire un carattere speciale';
    } else if (this.signupform.get('pass')!.hasError('minlength')) {
      return 'Lunghezza minima 8 caratteri';
    }
    return 'Inserire una password';
  }

  getErrorMessagepass2() {
    if (this.signupform.get('pass2')!.hasError('upperCase')) {
      return 'Inserire un carattere maiuscolo';
    } else if (this.signupform.get('pass2')!.hasError('num')) {
      return 'Inserire un numero';
    } else if (this.signupform.get('pass2')!.hasError('simbol')) {
      return 'Inserire un carattere speciale';
    } else if (this.signupform.get('pass2')!.hasError('minlength')) {
      return 'Lunghezza minima 8 caratteri';
    }
    return 'Inserire una password';
  }

  onSubmitsignup() {
    return this.authService.signUp(this.signupform.value).subscribe(data => {
      var path = (<any>data).stat
      this.router.navigate(['/' + path])
    })
  }

  onSubmitlogin() {
    return this.authService.signUp(this.loginform.value)
  }

  createPasswordStrengthValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (!value) {
        return null;
      }
      const hasUpperCase = /[A-Z]+/.test(value);
      const hasLowerCase = /[a-z]+/.test(value);
      const hasNumeric = /[0-9]+/.test(value);
      const hasSimbol = /[\!\@\#\$\%\^\&\*\)\(\+\=\.\<\>\{\}\[\]\:\;\'\"\|\~\`\_\-]/.test(value);
      const passwordValid = hasUpperCase && hasLowerCase && hasNumeric && hasSimbol;
      return !passwordValid ? { upperCase: !hasUpperCase, lowercase: !hasLowerCase, num: !hasNumeric, simbol: !hasSimbol } : null;
    }
  }

  checkpass(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const pass = control.get('pass')!.value;
      const pass2 = control.get('pass2')!.value;

      const error = pass != pass2 ? { differentPass: true } : null
      return error
    }
  }

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) { }
}

