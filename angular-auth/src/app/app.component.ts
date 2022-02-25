import { Component, Inject } from '@angular/core';


// IMPORT THE AUTHSERVICE FROM THE SDK
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  template: `
    <ng-container *ngIf="auth.isAuthenticated$ | async; else loggedOut">
      <button (click)="auth.logout({ returnTo: document.location.origin })">
        Log out
      </button>
    </ng-container>

    <ng-template #loggedOut>
      <button (click)="auth.loginWithRedirect()">Log in</button>
    </ng-template>

    <ul *ngIf="auth.user$ | async as user">
      <li>{{ user.name }}</li>
      <li>{{ user.email }}</li>
    </ul>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-auth';

  // Inject teh auth service into the component through thr constructor
  constructor(
    @Inject(DOCUMENT) public document: Document,
    public auth: AuthService
  ){}
}
