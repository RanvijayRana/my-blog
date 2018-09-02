import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { BlogService} from './blog.service'
import { BlogHttpService } from './blog-http.service';
import { RouterModule,Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogViewComponent,
    BlogCreateComponent,
    BlogEditComponent
  ],
  imports: [
    //http-client module
    HttpClientModule,
    BrowserModule,
    FormsModule,
    //router module forRoot
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'blog/:blogId',component:BlogViewComponent},
      {path:'create',component:BlogCreateComponent},
      {path:'edit/:blogId',component:BlogEditComponent}
    ]) 
  ],
  providers: [BlogService,BlogHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
