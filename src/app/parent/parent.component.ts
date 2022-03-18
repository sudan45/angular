import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  title = "sudan"
  player = [{
    "id": 1,
    "name": "Paras Khadka"
  }, {
    "id": 2,
    "name": "Karan KC"
  }]
  username = 'Onejohi Tony';

  @Output() parentFunction: EventEmitter<any> = new EventEmitter()


  constructor() { }

  ngOnInit(): void {
    this.parentFunction.emit("sudan bhandari")
  }
  recieveUsername($event:any) {
    console.log($event)
    this.title = $event;
  }

}
