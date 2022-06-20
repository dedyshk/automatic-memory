import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div [ngClass]="{verdanaFont:true}" ngClass="{asd:true}">
    <a routerLink="">Главная </a>
    <a routerLink="/about">О нас</a>
  
  <router-outlet></router-outlet>
  </div>
    
  `,
  styles: [`
  .verdanaFont { font-weight: normal; font-size:35px; margin:15px; text-align:right; background:whitesmoke;height:auto;}
  
  `]
})
export class AppComponent {
  title = 'Home page';
}
