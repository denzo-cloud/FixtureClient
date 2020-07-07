import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OlimpiadaComponent } from './components/olimpiada/olimpiada.component';
import { OlimpiadaShowComponent } from './components/olimpiada/olimpiada.show.component';
import { OlimpiadaEditComponent } from './components/olimpiada/olimpiada.edit.component';
import { PersonaComponent } from './components/persona/persona.component';
import { PersonaShowComponent } from './components/persona/persona.show.component';
import { PersonaEditComponent } from './components/persona/persona.edit.component';

const routes: Routes = [
  {
    path: 'admin/olimpiada', component: OlimpiadaComponent
  },
  {
    path: 'admin/olimpiada/:id',component: OlimpiadaShowComponent
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
