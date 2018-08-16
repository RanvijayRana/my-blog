//this is by default code
import { Component, OnInit } from '@angular/core';

//decorator
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

//a simple class
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
