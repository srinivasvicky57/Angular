import { Component } from '@angular/core';
import {array} from "./app";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'srinivas';
ngOnInit(){
  console.log('array',array());
  
}


}
