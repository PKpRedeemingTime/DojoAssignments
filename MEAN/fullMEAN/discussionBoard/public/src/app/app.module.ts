import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TopicComponent } from './topic/topic.component';
import { UserComponent } from './user/user.component';
import { UsersService } from "app/users.service";
import { TopicsService } from "app/topics.service";
import { PostsService } from "app/posts.service";
import { CommentsService } from "app/comments.service";
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    DashboardComponent,
    TopicComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
  ],
  providers: [UsersService, TopicsService, PostsService, CommentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
