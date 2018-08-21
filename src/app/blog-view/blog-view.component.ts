import { Component, OnInit } from '@angular/core';

import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {

  public currentBlog;
  
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

  constructor(private _route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
   
    this.getSingleBlogDetail(myBlogId);    
  }

  public getSingleBlogDetail(currentBlogId): any{
    for(let blog of this.allBlog){
      if(blog.blogId == currentBlogId){
        this.currentBlog = blog;
      }
    }
  }
}
