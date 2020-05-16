import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.css']
})
export class ChallengeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  hideone:boolean = false;
  hidetwo:boolean = true;

  hidefase():void {
    this.hideone= true;
    this.hidetwo= false;
  }

  viewfase():void {
    this.hideone= true;
    this.hidetwo= false;
  }

  hide():void {
    this.hideone= false;
    this.hidetwo= true;
  }
  

}
