import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { HomeSliderComponent } from './components/home-slider/home-slider.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeBottomComponent } from './components/home-bottom/home-bottom.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ContattiComponent } from './components/contatti/contatti.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { ConattiBannerComponent } from './components/conatti-banner/conatti-banner.component';
import { MatRippleModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { GooglepassComponent } from './components/googlepass/googlepass.component';
import { ConfirmmailComponent } from './components/confirmmail/confirmmail.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AlreadyRegisteredComponent } from './components/already-registered/already-registered.component';
import { VerifyMailComponent } from './components/verify-mail/verify-mail.component';
import { ServerErrorComponent } from './components/server-error/server-error.component';
import { MailNotRegisteredComponent } from './components/mail-not-registered/mail-not-registered.component';
import { AlreadySetuppedComponent } from './components/already-setupped/already-setupped.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeSliderComponent,
    MenuComponent,
    HomeBottomComponent,
    ContattiComponent,
    HomeComponent,
    LoginComponent,
    ConattiBannerComponent,
    GooglepassComponent,
    ConfirmmailComponent,
    ProfileComponent,
    AlreadyRegisteredComponent,
    VerifyMailComponent,
    ServerErrorComponent,
    MailNotRegisteredComponent,
    AlreadySetuppedComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatRippleModule,
    MatExpansionModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
