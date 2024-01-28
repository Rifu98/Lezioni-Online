import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { ContattiComponent } from '../components/contatti/contatti.component';
import { LoginComponent } from '../components/login/login.component';
import { GooglepassComponent } from '../components/googlepass/googlepass.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { AlreadyRegisteredComponent } from '../components/already-registered/already-registered.component';
import { VerifyMailComponent } from '../components/verify-mail/verify-mail.component';
import { ServerErrorComponent } from '../components/server-error/server-error.component';
import { MailNotRegisteredComponent } from '../components/mail-not-registered/mail-not-registered.component';
import { AlreadySetuppedComponent } from '../components/already-setupped/already-setupped.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Contatti', component: ContattiComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'googlepass', component: GooglepassComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'alreadyregistered', component: AlreadyRegisteredComponent },
  { path: 'verifymail', component: VerifyMailComponent },
  { path: 'servererror', component: ServerErrorComponent },
  { path: 'mailnotregistered', component: MailNotRegisteredComponent },
  { path: 'alreadysetupped', component: AlreadySetuppedComponent },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
