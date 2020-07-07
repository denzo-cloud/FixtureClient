import { Component } from "@angular/core";
import { PersonaService } from "../../services/persona/persona.service";
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder } from '@angular/forms'

@Component ({
  selector: 'app-persona-edit',
  templateUrl: './persona.edit.component.html',
  styleUrls: ['./persona.show.component.css']
})

export class PersonaEditComponent {
  formEdit;
  id : number;
  status = 'nothing';

  constructor(private personaService : PersonaService,
      private activatedRoute : ActivatedRoute,
      private formBuilder : FormBuilder,
      private router: Router){

      //Creo instancia
      this.formEdit = this.formBuilder.group({
        'id': 0,
        'codigo': '',
        'nombre': '',
        'apellido': '',
        'dni': '',
        'telefono': '',
        'foto': ''
      });
      
      this.id = parseInt(this.activatedRoute.
        snapshot.paramMap.get("id"));

      this.personaService.show(this.id)
        .subscribe((res)=>{

          //1 Sobre escribo
        this.formEdit.setValue({
          'id': res["object"]["id"],
          'codigo': res["object"]["codigo"],
          'nombre': res["object"]["nombre"],
          'apellido': res["object"]["apellido"],
          'dni': res["object"]["dni"],
          'telefono': res["object"]["telefono"],
          'foto': res["object"]["foto"],
        });

      }, (err)=>{
        
        //2

      });
    }
  onSubmit() {
    this.personaService.put(this.id,
    {
      'codigo': this.formEdit.value.codigo,
      'nombre': this.formEdit.value.nombre,
      'apellido': this.formEdit.value.apellido,
      'dni': this.formEdit.value.dni,
      'telefono': this.formEdit.value.telefono,
      'foto': this.formEdit.value.foto
    }).subscribe((res) => {
        alert("Felicidades");
      },(err)=>{
        alert("Sigue intentando");
    });
  }
  delete() {
    if ( this.status === "waiting" ) {
      return;
    }
    this.status = "waiting";

    this.personaService.delete(this.id)
      .subscribe((res)=>{
        this.status = "ready";
        setTimeout(function(){
          this.status = "nothing";
        }, 1000);

        alert("Felicidades");
        this.router.navigate(["/persona"]);
      }, (err)=>{
        this.status = "error";
        setTimeout(function(){
          this.status = "nothing";
        }, 1000);  

        alert("Sigue intentando");
      });
  }
}