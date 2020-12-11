import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
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
  text = document.getElementById('text');
  tl = gsap.timeline({defaults: {ease: "power2.inOut", duration: 0.5}});

  changeText(){

    this.textCounter++;
    if (this.textCounter > 6){
      this.textCounter = 0;
    }
      this.msg = this.messages[this.textCounter];
      this.tl.from('#text', {opacity: 0, duration:  1});
      switch(Math.floor(Math.random() * Math.floor(4))){
        case 0 : {
          this.tl.from('#text', {y: '50%'}, '-=.65');
          break;
        }
        case 1 : {
          this.tl.from('#text', {y: '-50%'}, '-=.65');
          break;
        }
        case 2 : {
          this.tl.from('#text', {x: '50%'}, '-=.65');
          break;
        }
        case 3 : {
          this.tl.from('#text', {x: '-50%'}, '-=.65');
          break;
        }
      }
  }

  ngOnInit(): void {
  }

}
