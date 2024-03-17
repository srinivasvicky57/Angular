import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { GamesComponent } from './games/games.component';
import { HomeComponent } from './home/home.component';
import { ProfilesComponent } from './users/profiles/profiles.component';
import { PostsComponent } from './games/posts/posts.component';

import { RouterModule ,Routes } from '@angular/router';
const routes=[
  {path:'',component:HomeComponent},
  {path:'games',component:GamesComponent , children:[
    {path:':id',component:PostsComponent}
  ]},
  
  {path:'users',component:UsersComponent,children:[
    {path:'profile/:id',component:ProfilesComponent}
  ]},
 
]
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    GamesComponent,
    HomeComponent,
    ProfilesComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
