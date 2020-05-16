import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detailadmin',
  templateUrl: './detailadmin.component.html',
  styleUrls: ['./detailadmin.component.css']
})
export class DetailadminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  users = [
    {
      "nombres": "Manuel",
      "apellidos": "Aguirre Castro",
      "email": "maguirre@continental.edu.pe"
    }
  ]

  hideRole:boolean = true;
  hidePswd:boolean = true;

  updateRole():void {
    this.hideRole= false;
    this.hidePswd= true;
  }

  resetPswd():void {
    this.hidePswd = false;
    this.hideRole = true;
    
  }

}
