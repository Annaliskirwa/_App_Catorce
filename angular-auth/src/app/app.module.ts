import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


// import the auth module fomr the sdk
import { AuthModule } from '@auth0/auth0-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // import the module into the application
    AuthModule.forRoot({
      domain: 'dev-zuzrkzsf.us.auth0.com',
      clientId: '5rvKpFd6SH5frjiiPDuYrMcnprDvnlPM'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
