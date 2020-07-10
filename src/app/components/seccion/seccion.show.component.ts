import {Component} from '@angular/core';
import { SeccionService} from '../../services/seccion/seccion.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  'selector': 'app-seccion-show',
  'templateUrl': './seccion.show.component.html'
})

export class SeccionShowComponent{
secc:any;
constructor(private seccionService: SeccionService,
private activatedRoute:ActivatedRoute){
  var id:number = parseInt(this.activatedRoute.snapshot.paramMap.get("id"));
  

  this.secc = {
    'nombre':'Desconocido',
    'id':0
  }
 this.seccionService.show(id)
      .subscribe((res) => {
        
        this.secc.nombre = res["object"]["nombre"];
        this.secc.id = res["object"]["id"];

      }, (err)=> {

      })
  }
}