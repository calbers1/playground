import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }


  messages = ["", "This", "is", "harder", "than", "it", "seems"];
  textCounter = 0;
  msg = this.messages[this.textCounter]
  changeText(){
    this.textCounter++;
    this.msg = this.messages[this.textCounter]
    
    if (this.textCounter >= 7){
      this.textCounter = 0;
    }
  }

  ngOnInit(): void {
  }

}
