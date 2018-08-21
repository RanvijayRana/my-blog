//this is by default code
import { Component, OnInit } from '@angular/core';

import { BlogService } from '../blog.service';

//decorator
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

//a simple class
export class HomeComponent implements OnInit {

  public allBlog;
  
  constructor(public blogService: BlogService) { }

  ngOnInit() {
  this.allBlog = this.blogService.getAllBlog();
  }

}
