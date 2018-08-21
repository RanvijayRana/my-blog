import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

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

  public currentBlog;

  constructor() { }

  public getAllBlog(): any{
    return this.allBlog;
  }

  public getSingleBlogDetail(currentBlogId): any{
    for(let blog of this.allBlog){
      if(blog.blogId == currentBlogId){
        this.currentBlog = blog;
        return this.currentBlog;
      }
    }
  }
}
