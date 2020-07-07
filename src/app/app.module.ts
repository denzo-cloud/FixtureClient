import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { OlimpiadaComponent } from './components/olimpiada/olimpiada.component';
import { OlimpiadaShowComponent } from './components/olimpiada/olimpiada.show.component';
import { OlimpiadaEditComponent } from './components/olimpiada/olimpiada.edit.component';
import { PersonaComponent } from './components/persona/persona.component';
import { PersonaShowComponent } from './components/persona/persona.show.component';
import { PersonaEditComponent } from './components/persona/persona.edit.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    OlimpiadaComponent,
    OlimpiadaShowComponent,
    OlimpiadaEditComponent,
    PersonaComponent,
    PersonaShowComponent,
    PersonaEditComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
