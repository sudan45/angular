import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  firstname = "sudan";
  image = "https://www.espncricinfo.com/db/PICTURES/CMS/321700/321749.png";

  passvalue(e: any) {
    this.firstname = e.target.value
  }



  ngOnInit(): void {
  }

}
