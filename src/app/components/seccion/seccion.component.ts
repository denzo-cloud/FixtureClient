import {Component} from '@angular/core';
import { Router } from '@angular/router';
import { SeccionService } from '../../services/seccion/seccion.service';
import { FormBuilder } from '@angular/forms';

@Component({
  'selector': 'app-seccion',
  'templateUrl': './seccion.component.html',
  styleUrls: ['./seccion.component.css']
})

export class SeccionComponent {
  seccion:any =[];
  newSeccionForm;
  crud_operation = {is_new: false, is_visible: false}

  constructor(
    private formBuilder:FormBuilder,
    private router: Router, 
    private seccionService:SeccionService){
    
      this.newSeccionForm = this.formBuilder.group({
        'nombrey': ''
        });
      
      this.seccionService.index().subscribe((res) =>{
      this.seccion = res['objects'];
      
      
      }, (err)=>{

      });
      
  }

  crearSeccion() {
    this.seccionService
      .post(this.newSeccionForm.value.nombrey)
      
      
      .subscribe((res)=>{
        if ( res['status'] ) {
          /*alert(">" + res["object"]["nombre"]);
          alert(">" + res["object"]["descripcion"]);
          alert(">" + res["object"]["fecha_inicio"]);
          alert(">" + res["object"]["fecha_fin"]);*/
        }
      }, (err) => {

      })

    //console.log();
  } 
   new() {
    this.crud_operation.is_visible = true;
    this.crud_operation.is_new = true;
  }
}

