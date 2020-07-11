import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OlimpiadaComponent } from './components/olimpiada/olimpiada.component';
import { OlimpiadaShowComponent } from './components/olimpiada/olimpiada.show.component';
import { OlimpiadaEditComponent } from './components/olimpiada/olimpiada.edit.component';
import { PersonaComponent } from './components/persona/persona.component';
import { PersonaShowComponent } from './components/persona/persona.show.component';
import { PersonaEditComponent } from './components/persona/persona.edit.component';
import { CarreraComponent } from './components/carrera/carrera.component';
import { CarreraShowComponent } from './components/carrera/carrera.show.component';
import { CarreraEditComponent } from './components/carrera/carrera.edit.component';
import { SeccionComponent } from './components/seccion/seccion.component';
import { SeccionShowComponent } from './components/seccion/seccion.show.component';
import { SeccionEditComponent } from './components/seccion/seccion.edit.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { UsuarioEditComponent } from './components/usuario/usuario.edit.component';
import { MatriculaComponent } from './components/matricula/matricula.component';
import { DisciplinaComponent } from './components/disciplina/disciplina.component';
import { OlimpiadaResolver } from './resolvers/olimpiada.resolver';


const routes: Routes = [
  {
    path: 'admin/olimpiada', component: OlimpiadaComponent
  },
  {
    path: 'admin/olimpiada/:id',component: OlimpiadaShowComponent,
    resolve: {
      olimpiadaResolver: OlimpiadaResolver,
    }
  },
  {
    path: 'admin/olimpiada/:id/edit', component: OlimpiadaEditComponent
  },
  {
    path: 'admin/persona', component: PersonaComponent
  },
  {
    path: 'admin/persona/:id',component: PersonaShowComponent
  },
  {
    path: 'admin/persona/:id/edit', component: PersonaEditComponent
  },
  {
    path: 'admin/carrera', component: CarreraComponent
  },
  {
    path: 'admin/carrera/:id', component: CarreraShowComponent
  },
  {
    path: 'admin/carrera/:id/edit', component: CarreraEditComponent
  },
   {
    path: 'admin/seccion', component: SeccionComponent
  },
  {
    path: 'admin/seccion/:id', component: SeccionShowComponent
  },
  {
    path: 'admin/seccion/:id/edit', component: SeccionEditComponent
  },
  {
    path: 'admin/usuario', component: UsuarioComponent
  },
  {
    path: 'admin/usuario/:id', component: UsuarioEditComponent
  },
  {
    path: 'admin/matricula', component: MatriculaComponent
  },
  {
    path: 'admin/disciplina', component: DisciplinaComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
