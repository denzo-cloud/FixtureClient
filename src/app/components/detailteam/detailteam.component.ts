import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detailteam',
  templateUrl: './detailteam.component.html',
  styleUrls: ['./detailteam.component.css']
})
export class DetailteamComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  students = [
    {
      "codigo":"1810242",
      "seccion":"B05AN1",
      "apellidosYnombres":"LUCAS LEON KEVIN ANTONIO",
      "ciclo":"2020-1",
    },
    {
      "codigo":"1820240",
      "seccion":"A05AN1",
      "apellidosYnombres":"LEZAMA MATEO JEFRY JORGE",
      "ciclo":"2020-1",
    },
    {
      "codigo":"1820432",
      "seccion":"C05AN1",
      "apellidosYnombres":"LOPEZ PALOMINO JEENY YULIANA",
      "ciclo":"2020-1",
    },
    {
      "codigo":"1127311",
      "seccion":"D06AN1",
      "apellidosYnombres":"LULO CAHUANA DARWIN JOEL",
      "ciclo":"2020-1",
    },
    {
      "codigo":"1921409",
      "seccion":"E01AM1",
      "apellidosYnombres":"LEON POZADAS EMELY ANALY",
      "ciclo":"2019-2",
    },
  ]

}
