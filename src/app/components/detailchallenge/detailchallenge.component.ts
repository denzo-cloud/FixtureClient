import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detailchallenge',
  templateUrl: './detailchallenge.component.html',
  styleUrls: ['./detailchallenge.component.css']
})
export class DetailchallengeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  students = [
    {
      "carrera":"Administración Bancaria",
      "seccion":"B05AN1",
      "periodo":"2020-1",
      "codigo":"1810242",
      "apellidosYnombres":"LUCAS LEON KEVIN ANTONIO",
      "dni":"76189482",
    },
    {
      "carrera":"Administración",
      "seccion":"A05AN1",
      "periodo":"2020-1",
      "codigo":"1820240",
      "apellidosYnombres":"LEZAMA MATEO JEFRY JORGE",
      "dni":"771244255",
    },
    {
      "carrera":"Computación e Informática",
      "seccion":"C05AN1",
      "periodo":"2020-1",
      "codigo":"1820432",
      "apellidosYnombres":"LOPEZ PALOMINO JEENY YULIANA",
      "dni":"74371674",
    },
    {
      "carrera":"Diseño Gráfico",
      "seccion":"D06AN1",
      "periodo":"2020-1",
      "codigo":"1127311",
      "apellidosYnombres":"LULO CAHUANA DARWIN JOEL",
      "dni":"48465377",
    },
    {
      "carrera":"Administración de Empresas",
      "seccion":"E01AM1",
      "periodo":"2019-2",
      "codigo":"1921409",
      "apellidosYnombres":"LEON POZADAS EMELY ANALY",
      "dni":"71692508",
    },
  ]

}
