import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  carreras = [
	  {"id":1, "number":"1", "descripcion":"Computacion e Informática"},
	  {"id":2, "number":"2", "descripcion":"Gastronomia y Arte culinario"},
	  {"id":3, "number":"3", "descripcion":"Contabilidad"}
  ];

  secciones = [
	  {"id":4, "number":"1", "descripcion":"S01AM1-2020-2"},
	  {"id":5, "number":"2", "descripcion":"A05BN1-2020-1"},
	  {"id":6, "number":"3", "descripcion":"G03AT1-2020-2"}
  ];

}
