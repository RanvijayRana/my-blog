//this is by default code
import { Component, OnInit } from '@angular/core';

import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';

//decorator
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

//a simple class
export class HomeComponent implements OnInit {

  public allBlog;
  
  constructor( public blogService: BlogService, public blogHttpService: BlogHttpService) { }

  ngOnInit() {
 // this.allBlog = this.blogHttpService.getAllBlog();

    this.allBlog = this.blogHttpService.getAllBlog().subscribe(
      data =>{
        console.log("logging data");
        console.log(data);
        this.allBlog = data["data"];
      },
      error =>{
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    )

    console.log(this.allBlog)
  }

}
