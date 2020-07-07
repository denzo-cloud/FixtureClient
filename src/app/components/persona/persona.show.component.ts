import { Component } from '@angular/core';
import { PersonaService } from '../../services/persona/persona.service';
import { ActivatedRoute } from "@angular/router";
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-persona-show',
  templateUrl: './persona.show.component.html',
  styleUrls: ['./persona.show.component.css']
})

export class PersonaShowComponent{
  per:any; 
  constructor(private personaService : PersonaService, 
      private activatedRoute : ActivatedRoute){

      var id : number = parseInt(this.activatedRoute.
        snapshot.paramMap.get("id"));

      this.per = {
        'nombre': 'Desconocido',
        'id': 0
      }

      this.personaService.show(id)
        .subscribe((res) => {
          
          this.per.nombre = res["object"]["nombre"];
          this.per.id = res["object"]["id"];

        }, (err)=> {

      })
  }
}