import { Component } from '@angular/core';


// IMPORT THE AUTHSERVICE FROM THE SDK
import { AuthService } from '@auth0/auth0-angular';
@Component({
  selector: 'app-root',
  template: '<button (click)="auth.loginWithRedirect()">Log in</button>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-auth';

  // Inject teh auth service into the component through thr constructor
  constructor(
    public auth: AuthService
  ){}
}
