import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  userdata:any={};
  getdata(data:NgForm){
    console.log(data)
    this.userdata=data
  }
 

  constructor() { }

  ngOnInit(): void {
  }

}
