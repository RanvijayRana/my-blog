import { Injectable } from '@angular/core';

import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {
  public allBlog;
  public currentBlog;
  public baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs';
  public authToken = 'OTVkOTZiYzMxNzIzMDcwOTJmMmIzZTM4OWU5OTI4NzU3MjMzODFlOGI5MGMxOTM1MmExOTFlZTAxODgyZDk4MjUzMDUxYjJiNmY2ZTVjMGIzMGVhMGY4YWQxMjZhNjlmYmM2ZTdkZTkyODY3MDIyNjQwMzIyMjQ3ZDhjMTI4YzkwMA==';

  constructor(private _http:HttpClient) { 
    console.log("http service called");
  }

  public getAllBlog(): any{
    let myResponse = this._http.get(this.baseUrl+'/all?authToken='+this.authToken);  
    console.log(myResponse);
    return myResponse;
  }

  public getSingleBlogInformation(currentBlogId): any{
    let myResponse = this._http.get(this.baseUrl+'/view/'+currentBlogId+'?authToken='+this.authToken);  
    console.log(myResponse);
    return myResponse;
  }
}
