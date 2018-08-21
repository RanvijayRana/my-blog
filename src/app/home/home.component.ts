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
  public allBlog = [
    {
      "blogId": 1,
      "blogTitle": "This is blog 1",
      "blogDescription": "This is description",
      "footer": "1 aug 2018"
    },
    {
      "blogId": 2,
      "blogTitle": "This is blog 2",
      "blogDescription": "This is description 222",
      "footer": "2 aug 2018"
    },
    {
      "blogId": 3,
      "blogTitle": "This is blog 3",
      "blogDescription": "This is description 333",
      "footer": "3 aug 2018"
    }
  ]
  
  constructor() { }

  ngOnInit() {
  }

}
