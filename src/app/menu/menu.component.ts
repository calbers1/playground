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
  transition = '0s';
  opacity = '0%';
  changeText(){
    this.transition = '0.5s';
    this.opacity = '0%';
    this.textCounter++;
    if (this.textCounter > 6){
      this.textCounter = 0;
    }
    
    setTimeout(() => {
      this.msg = this.messages[this.textCounter];
      this.opacity = '100%';
      this.transition = '0.5s'
    }
    , 500);
  }

  ngOnInit(): void {
  }

}
