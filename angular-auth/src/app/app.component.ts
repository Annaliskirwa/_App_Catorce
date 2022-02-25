import { Component, Inject } from '@angular/core';


// IMPORT THE AUTHSERVICE FROM THE SDK
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html' ,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-auth';

  // Inject teh auth service into the component through thr constructor
  constructor(
    @Inject(DOCUMENT) public document: Document,
    public auth: AuthService
  ){}
}
