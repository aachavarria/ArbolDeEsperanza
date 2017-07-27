import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import  {FilterPipe } from './pipes/FilterPipe'

import { AppComponent } from './app.component';
import { PersonasComponent } from './components/personas/personas.component';
import { NewPersonaComponent } from './components/new-persona/new-persona.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent,
    FilterPipe,
    NewPersonaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'personas',
        component: PersonasComponent
      },
      {
        path: '**',
        redirectTo: "/",
        pathMatch: 'full'
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
