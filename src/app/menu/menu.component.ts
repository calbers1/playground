import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  tl = gsap.timeline({defaults: {ease: "power3.inOut", duration: .5}})
  .from('#thing', {opacity: 0, duration:  0.5});
  constructor() { }

  messages = ["", "This", "is", "harder", "than", "it", "seems"];
  textCounter = 0;
  msg = this.messages[this.textCounter]

  changeText(){
    
    setTimeout(()=>{
    this.textCounter++;
    if (this.textCounter > 6){
      this.textCounter = 0;
    }
    this.tl.fromTo('#text', {opacity: 0}, {opacity:100, duration:0.5});
      this.msg = this.messages[this.textCounter];
      switch(Math.floor(Math.random() * Math.floor(8))){
        case 0 : {
          this.tl.from('#text', {y: '50%', x: '50%', rotate: 360, scale:0});
          break;
        }
        case 1 : {
          this.tl.from('#text', {y: '-50%', x: '-50%', rotate: 360, scale:0});
          break;
        }
        case 2 : {
          this.tl.from('#text', {x: '50%', y: '-50%', rotate: 360, scale:0});
          break;
        }
        case 3 : {
          this.tl.from('#text', {x: '-50%', y: '50%', rotate: 360, scale:0});
          break;
        }
        case 4 : {
          this.tl.from('#text', {y: '50%', rotate: 360, scale:0});
          break;
        }
        case 5 : {
          this.tl.from('#text', {y: '-50%', rotate: 360, scale:0});
          break;
        }
        case 6 : {
          this.tl.from('#text', {x: '50%', rotate: 360, scale:0});
          break;
        }
        case 7 : {
          this.tl.from('#text', {x: '-50%', rotate: 360, scale:0});
          break;
        }
      }
    }, 10);
    setTimeout(() => {
    this.tl.fromTo('#text', {opacity: 100}, {opacity:0, duration:2}, "-=1.5");
    }, 100);
  }

  ngOnInit(): void {
  }

}
