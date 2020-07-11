import { Component, OnInit } from '@angular/core';
import { DisciplinaService } from '../../services/disciplina/disciplina.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { OlimpiadaService } from '../../services/olimpiada/olimpiada.service';

@Component({
  selector: 'app-disciplina',
  templateUrl: './disciplina.component.html',
  styleUrls: ['./disciplina.component.css']
})


export class DisciplinaComponent implements OnInit {
  lista:any=[];
  
  //disciplinas:any[];
  olimpiadas:any=[];
  newDisciplinaForm;
  crud_operation = {is_new: false, is_visible: false}
  olimpiadaObject:any = {
    'selected': false,
    'text': '',
  };
  constructor(private formBuilder:FormBuilder,
    private router: Router,
    private olimpiadaService: OlimpiadaService,
    private disciplinaService:DisciplinaService) { 
      this.newDisciplinaForm = this.formBuilder.group({
        'nombre': '',
        'participantes': '',
        'olimpiada_id': ''
      });
  
      this.load();
    }

  ngOnInit(): void {
  }
  unselectOlimpiada() {
    this.olimpiadaObject.selected = false;
    this.olimpiadaObject.text = "";
    this.newDisciplinaForm.patchValue({
      "olimpiada_id": undefined
    });    
  }
  selectOlimpiada(o:any) {
    this.olimpiadaObject.selected = true;
    this.olimpiadaObject.text = o.nombre;
    this.newDisciplinaForm.patchValue({
      "olimpiada_id": o.id
    });
  }
  loadOlimpiada() {
    this.olimpiadaService.index()
    .subscribe((res) => {
      // Aqui el codigo cuando la peticion sea ok.

      this.olimpiadas = res["objects"];
    }, (err)=>{
      // Aqui el codigo cuando la peticion sea fallida.

    });    
  }  
  load() {
    /*this.olimpiadaService.index()
    .subscribe((res) => {
      // Aqui el codigo cuando la peticion sea ok.

      this.lista = res["objects"];
    }, (err)=>{
      // Aqui el codigo cuando la peticion sea fallida.

    });*/ 
    this.disciplinaService.index()
    .subscribe((res) => {
      // Aqui el codigo cuando la peticion sea ok.

      this.lista = res["objects"];
    }, (err)=>{
      // Aqui el codigo cuando la peticion sea fallida.

    });    
  }  
  crearDisciplina() {
    this.disciplinaService
    .post(this.newDisciplinaForm.value.nombre,this.newDisciplinaForm.value.participantes,
      this.newDisciplinaForm.value.olimpiada_id)
      .subscribe((res)=>{
        if ( res['status'] ) {
          this.list();
        }
      }, (err) => {

    })
  }
  new() {
    this.loadOlimpiada();
    this.crud_operation.is_visible = true;
    this.crud_operation.is_new = true;
  }
  list() {
    this.load();
    this.crud_operation.is_visible = false;
    this.crud_operation.is_new = false;    
  }

}
