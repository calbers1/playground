import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, AfterViewInit {

  tl = gsap.timeline({defaults: {ease: "power3.inOut", duration: .5}})
  tl2 = gsap.timeline({defaults: {ease: "power3.inOut", duration: 3}})
  tl3 = gsap.timeline({defaults: {ease: "power3.inOut", duration: 1}})
  messages = ["", "This", "is", "harder", "than", "it", "seems"];
  textCounter = 0;
  msg = this.messages[this.textCounter]

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void{
    this.tl2.set('#thing', {opacity: 0, transition: 0});
    this.tl2.fromTo('#thing',{opacity: 0}, {opacity: 100, duration:  1});
    this.tl2.set('#thing', {transition: 0.3}, "-=.9");
  }

  changeText(){
    
    setTimeout(()=>{
    this.textCounter++;
    if (this.textCounter > 6){
      this.textCounter = 0;
    }
    this.tl3.play()
    .fromTo('#text', {opacity: 0}, {opacity:100, duration:1});
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
      if(!this.tl3.reversed()){
    this.tl3.reverse();
      }
    }, 500);
  }

}
