import { Component, OnInit } from '@angular/core';
import { MatriculaService } from '../../services/matricula/matricula.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { CarreraService } from '../../services/carrera/carrera.service';

@Component({
  selector: 'app-matricula',
  templateUrl: './matricula.component.html',
  styleUrls: ['./matricula.component.css']
})


export class MatriculaComponent implements OnInit {
  lista:any=[];

  carreras:any=[];
  newMatriculaForm;
  crud_operation = {is_new: false, is_visible: false}
  carreraObject:any = {
    'selected': false,
    'text': '',
  };
  constructor(private formBuilder:FormBuilder,
    private router: Router,
    private carreraService: CarreraService,
    private matriculaService:MatriculaService) { 
      this.newMatriculaForm = this.formBuilder.group({
        'carrera_id': '',
        'persona_id': '',
        'seccionperiodo_id': ''
      });
  
      this.load();
    }

  ngOnInit(): void {
  }
  unselectCarrera() {
    this.carreraObject.selected = false;
    this.carreraObject.text = "";
    this.newMatriculaForm.patchValue({
      "carrera_id": undefined
    });    
  }
  selectCarrera(o:any) {
    this.carreraObject.selected = true;
    this.carreraObject.text = o.nombre;
    this.newMatriculaForm.patchValue({
      "carrera_id": o.id
    });
  }
  loadCarrera() {
    this.carreraService.index()
    .subscribe((res) => {
      // Aqui el codigo cuando la peticion sea ok.

      this.carreras = res["objects"];
    }, (err)=>{
      // Aqui el codigo cuando la peticion sea fallida.

    });    
  }  
  load() {
    this.matriculaService.index()
    .subscribe((res) => {
      // Aqui el codigo cuando la peticion sea ok.

      this.lista = res["objects"];
    }, (err)=>{
      // Aqui el codigo cuando la peticion sea fallida.

    });    
  }  
  crearOlimpiada() {
    this.matriculaService
    .post(this.newMatriculaForm.value.nombre,this.newMatriculaForm.value.descripcion,
      this.newMatriculaForm.value.fecha_inicio,
      this.newMatriculaForm.value.fecha_fin_inscripcion,
      this.newMatriculaForm.value.fecha_fin)
      .subscribe((res)=>{
        if ( res['status'] ) {
          this.list();
        }
      }, (err) => {

    })
  }
  new() {
    this.loadCarrera();
    this.crud_operation.is_visible = true;
    this.crud_operation.is_new = true;
  }
  list() {
    this.load();
    this.crud_operation.is_visible = false;
    this.crud_operation.is_new = false;    
  }

}
