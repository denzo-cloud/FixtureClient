import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component'
import { StudentComponent } from './components/student/student.component'
import { TeamComponent } from './components/team/team.component';
import { ChallengeComponent } from './components/challenge/challenge.component';
import { DataimportComponent } from './components/dataimport/dataimport.component';
import { OlympiadComponent } from './components/olympiad/olympiad.component';
import { CareerComponent } from './components/career/career.component';
import { DetailteamComponent } from './components/detailteam/detailteam.component'
import { DetailchallengeComponent } from './components/detailchallenge/detailchallenge.component';
import { AdminComponent } from './components/admin/admin.component';
import { DetailadminComponent } from './components/detailadmin/detailadmin.component';



const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'student',
    component: StudentComponent
  },
  {
    path: 'team',
    component: TeamComponent
  },
  {
    path: 'detailteam',
    component: DetailteamComponent    
  },
  {
    path: 'challenge',
    component: ChallengeComponent
  },
  {
    path: 'detailchallenge',
    component: DetailchallengeComponent
  },
  {
    path: 'dataimport',
    component: DataimportComponent
  },
  {
    path: 'olympiad',
    component: OlympiadComponent
  },
  {
    path: 'career',
    component: CareerComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'detailadmin',
    component: DetailadminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
