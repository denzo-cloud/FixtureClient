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
  hidethree:boolean = true;

  hidefase():void {
    this.hideone= false;
    this.hidetwo= true;
    this.hidethree = true;
  }

  viewfase():void {
    this.hideone= true;
    this.hidetwo= false;
    this.hidethree = true;
  }

  hide3():void {
    this.hideone= true;
    this.hidetwo= true;
    this.hidethree= false;
  }
  
}
