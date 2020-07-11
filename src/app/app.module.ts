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
import { CarreraComponent } from './components/carrera/carrera.component';
import { CarreraShowComponent } from './components/carrera/carrera.show.component';
import { CarreraEditComponent } from './components/carrera/carrera.edit.component';
import { SeccionComponent } from './components/seccion/seccion.component';
import { SeccionShowComponent } from './components/seccion/seccion.show.component';
import { SeccionEditComponent } from './components/seccion/seccion.edit.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { UsuarioEditComponent } from './components/usuario/usuario.edit.component';
import { MatriculaComponent } from './components/matricula/matricula.component';
import { DisciplinaComponent } from './components/disciplina/disciplina.component'

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
    HeaderComponent,
    CarreraComponent,
    CarreraShowComponent,
    CarreraEditComponent,
    SeccionComponent,
    SeccionShowComponent,
    SeccionEditComponent,
    UsuarioComponent,
    UsuarioEditComponent,
    MatriculaComponent,
    DisciplinaComponent
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
