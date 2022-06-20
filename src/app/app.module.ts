import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent }   from './about.component';
import { HomeComponent }   from './home.component';
import { NotFoundComponent }   from './not-found.component';
import { Route, RouterModule, Routes } from '@angular/router';

const appRoutes: Routes=[
  {path:  '',component:HomeComponent},
  {path:  'about',component:AboutComponent},
  {path:  '**',component:NotFoundComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent, 
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
