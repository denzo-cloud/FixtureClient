import {Component} from '@angular/core';
import {CarreraService } from '../../services/carrera/carrera.service';
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder } from '@angular/forms';


@Component({
  'selector': 'app-carrera-edit',
  'templateUrl': './carrera.edit.component.html',
  'styleUrls': ['./carrera.edit.component.css']
})

export class CarreraEditComponent {
  formEdit;
  id : number;
  status='nothing';

  constructor(private carreraService : CarreraService,
      private activatedRoute : ActivatedRoute,
      private formBuilder : FormBuilder,
      private router : Router){

      //Creo instancia
      this.formEdit = this.formBuilder.group({
        'id': 0,
        'nombre' : ''
      });
      
      this.id = parseInt(this.activatedRoute.
        snapshot.paramMap.get("id"));

      this.carreraService.show(this.id)
        .subscribe((res)=>{

          //1 Sobre escribo
        this.formEdit.setValue({
          'id': res["object"]["id"],
          'nombre': res["object"]["nombre"]
        });

      }, (err)=>{
        
        //2

      });
    }
   onSubmit() {
    this.carreraService.put(this.id, 
      {
        'nombre': this.formEdit.value.nombre
      }).subscribe((res) => {
        alert("Felicidades");
      }, (err)=>{
        alert("Sigue intentando");
      });
  }
  delete() {
    if ( this.status === "waiting" ) {
      return;
    }

    this.status = "waiting";

    this.carreraService.delete(this.id)
      .subscribe((res)=>{
        this.status = "ready";
        setTimeout(function(){
          this.status = "nothing";
        }, 1000);

        alert("Felicidades");
        this.router.navigate(["/carrera"]);
      }, (err)=>{
        this.status = "error";
        setTimeout(function(){
          this.status = "nothing";
        }, 1000);  

        alert("Sigue intentando");
      });
  }
}