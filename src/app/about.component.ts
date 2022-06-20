import { Component} from '@angular/core';
  
@Component({
    selector: 'about-app',
    template: `<h1 ngClass="Title">О сайте</h1>
`,
styles:[`
    .Title{
        text-align:center; font-size:24px;
    }

`]
})
export class AboutComponent { }