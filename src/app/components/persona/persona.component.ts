import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../services/persona/persona.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  lista:any;
  newPersonaForm;
  crud_operation = {is_new: false, is_visible: false}

  constructor(private formBuilder:FormBuilder,
    private router: Router,
    private personaService:PersonaService) {
      this.newPersonaForm = this.formBuilder.group({
        'codigo': '',
        'nombre': '',
        'apellido': '',
        'dni': '',
        'telefono': '',
        'foto': ''
      })
  
      this.personaService.index()
        .subscribe((res) => {
          // Aqui el codigo cuando la peticion sea ok.
  
          this.lista = res["objects"];
        }, (err)=>{
          // Aqui el codigo cuando la peticion sea fallida.
  
        });
    }

  ngOnInit(): void {
  }

  crearPersona() {
    this.personaService
    .post(this.newPersonaForm.value.codigo,
      this.newPersonaForm.value.nombre,
      this.newPersonaForm.value.apellido,
      this.newPersonaForm.value.dni,
      this.newPersonaForm.value.telefono,
      this.newPersonaForm.value.foto)
      .subscribe((res)=>{
        if ( res['status'] ) {
          alert(">" + res["object"]["nombre"]);
        }
      }, (err) => {

    })
  }
  new() {
    this.crud_operation.is_visible = true;
    this.crud_operation.is_new = true;
  }

}
