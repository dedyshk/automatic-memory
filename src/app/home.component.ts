import { Component} from '@angular/core';
  
@Component({
    selector: 'home-app',
    template: `
<h3 ngClass="Title">Главная страница</h3>
`,
styles:[`
    .Title{
        text-align:center;font-size:24px;
    }

`]
})
export class HomeComponent { }