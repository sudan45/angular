import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slidebar',
  templateUrl: './slidebar.component.html',
  styleUrls: ['./slidebar.component.css']
})
export class SlidebarComponent implements OnInit {
  name:any=["sansar","sudan",250]
  status=2
  button(e:any){
    this.status=e
  }
  constructor() { }

  ngOnInit(): void {
  }

}
