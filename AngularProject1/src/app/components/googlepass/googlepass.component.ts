import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-googlepass',
  templateUrl: './googlepass.component.html',
  styleUrls: ['./googlepass.component.css']
})
export class GooglepassComponent implements OnInit {

  loginform!: FormGroup;
  hidesignuppass = true
  hidesignuppass2 = true
  mail = ''

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      this.mail = params['mail']
    })

    this.loginform = new FormGroup({
      pass: new FormControl('', [Validators.required, this.createPasswordStrengthValidator(), Validators.minLength(8)]),
      pass2: new FormControl('', [Validators.required, this.createPasswordStrengthValidator(), Validators.minLength(8)]),
    }, {
      validators: this.checkpass()
    })
  }

  onSubmitlogin() {
    console.log('send')
    this.authService.googlepass(this.loginform.value, this.mail).subscribe(data => {
      var path = (<any>data).stat
      console.log('recived')
      this.router.navigate(['/' + path])
    })
  }

  getErrorMessagepass() {
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

  getErrorMessagepass2() {
    if (this.loginform.get('pass2')!.hasError('upperCase')) {
      return 'Inserire un carattere maiuscolo';
    } else if (this.loginform.get('pass2')!.hasError('num')) {
      return 'Inserire un numero';
    } else if (this.loginform.get('pass2')!.hasError('simbol')) {
      return 'Inserire un carattere speciale';
    } else if (this.loginform.get('pass2')!.hasError('minlength')) {
      return 'Lunghezza minima 8 caratteri';
    }
    return 'Inserire una password';
  }

  checkpass(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const pass = control.get('pass')!.value;
      const pass2 = control.get('pass2')!.value;

      const error = pass != pass2 ? { differentPass: true } : null
      return error
    }
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

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) { }


}
