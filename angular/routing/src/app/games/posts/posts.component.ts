import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
  id:any
constructor(
  private activatedRoute:ActivatedRoute
){

}
ngOnInit(){
this.id=this.activatedRoute.snapshot.params['id']
console.log(this.id);

}
}
