import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  teams = [
    {
      "disciplina":"Fultbol 8",
      "equipo":"Team Rashberry",
    },
    {
      "disciplina":"Voley Mixto",
      "equipo":"Informatic",
    },
    {
      "disciplina":"Basquet",
      "equipo":"Anonimous",
    },
    {
      "disciplina":"Tenis de Mesa",
      "equipo":"Ekeko",
    },
    {
      "disciplina":"Ajedrez",
      "equipo":"The Lamp Full Stack",
    },
  ]

}
