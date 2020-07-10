import {Component} from '@angular/core';
import { Router } from '@angular/router';
import { CarreraService } from '../../services/carrera/carrera.service';
import { FormBuilder } from '@angular/forms';

@Component({
  'selector': 'app-carrera',
  'templateUrl': './carrera.component.html',
  'styleUrls': ['./carrera.component.css']
})

export class CarreraComponent {
  
  
  carrera:any =[];
  newCarreraForm;
  crud_operation = {is_new: false, is_visible: false}
  
  constructor(
    private formBuilder:FormBuilder,
    private router: Router, 
    private carreraService:CarreraService) {
    
      this.newCarreraForm = this.formBuilder.group({
        'nombreo': ''
        });
      
      this.carreraService.index().subscribe((res) =>{
      this.carrera = res['objects'];
      
      
      }, (err)=>{

      });
      
  }

   crearCarrera() {
    this.carreraService
      .post(this.newCarreraForm.value.nombreo)
      
      
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

