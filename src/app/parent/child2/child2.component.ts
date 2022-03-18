import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  username: string = "";
  @Output() usernameEmitter = new EventEmitter<string>();
  parentFunction(data:any){
    console.log(data)
  }

  sendName() {
    this.usernameEmitter.emit("sudan bhadnair"); // emit username on click
  }
 
  constructor() { }

  ngOnInit(): void {
    
  }

}
