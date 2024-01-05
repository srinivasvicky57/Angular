import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-createobserver',
  templateUrl: './createobserver.component.html',
  styleUrl: './createobserver.component.css'
})
export class CreateobserverComponent {
  names: Observable<string> | undefined;
   name: string | undefined;

ngOnInit(){
  this.names=new Observable(
    function(observer){
      try{
        observer.next("SRINI");
        observer.next("VICKY");
        observer.next("SIRI");
        observer.next("SRINI");
        observer.next("VICKY");
        observer.next("SIRI");
        
      }
      catch(e){
        observer.error(e)

      }
    }
  )
  this.names.subscribe(data=>{
    console.log(data);
    
    this.name=data
  })
}
}
