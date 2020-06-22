import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OlimpiadaService } from '../../services/olimpiada.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-olympiad',
  templateUrl: './olympiad.component.html',
  styleUrls: ['./olympiad.component.css']
})

export class OlympiadComponent implements OnInit {

  olimpiadas:any =[];
  newOlimpiadaForm;
  constructor(
    private formBuilder:FormBuilder,
    private router: Router, 
    private olimpiadaService:OlimpiadaService) {
    
      this.newOlimpiadaForm = this.formBuilder.group({
        'nombreo': '', 'descripciono': '', 'fecha_inicio': '', 'fecha_fin_inscripcion':'', 'fecha_fin': ''
        });
      
      this.olimpiadaService.index().subscribe((res) =>{
      this.olimpiadas = res['objects'];
      
      }, (err)=>{

      });

  }

  crearOlimpiada() {
    this.olimpiadaService
      .post(this.newOlimpiadaForm.value.nombreo , this.newOlimpiadaForm.value.descripciono,
      this.newOlimpiadaForm.value.fecha_inicio,
      this.newOlimpiadaForm.value.fecha_fin_inscripcion, 
      this.newOlimpiadaForm.value.fecha_fin)
      
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

  ngOnInit(): void {
  }

}
