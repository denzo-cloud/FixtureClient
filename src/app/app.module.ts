import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { StudentComponent } from './components/student/student.component';
import { TeamComponent } from './components/team/team.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ChallengeComponent } from './components/challenge/challenge.component';
import { DataimportComponent } from './components/dataimport/dataimport.component';
import { OlympiadComponent } from './components/olympiad/olympiad.component';
import { CareerComponent } from './components/career/career.component';
import { DetailteamComponent } from './components/detailteam/detailteam.component';
import { DetailchallengeComponent } from './components/detailchallenge/detailchallenge.component';
import { AdminComponent } from './components/admin/admin.component';
import { DetailadminComponent } from './components/detailadmin/detailadmin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentComponent,
    TeamComponent,
    NavbarComponent,
    ChallengeComponent,
    DataimportComponent,
    OlympiadComponent,
    CareerComponent,
    DetailteamComponent,
    DetailchallengeComponent,
    AdminComponent,
    DetailadminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
