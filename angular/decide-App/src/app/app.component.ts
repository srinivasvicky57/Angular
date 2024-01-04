import { ArrayType } from '@angular/compiler';
import { Component ,OnInit } from '@angular/core';
import answerslist from './utils/answers.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'The Decide App';
 
  appValues ={
    visiblePanel:'one',
    question:'',
    mode:false,
    answers:answerslist.answers,
    custom:[],
    answer:''
  }
  handleNext(event:any){
    this.appValues=event
  }
 
  ngOnInit(){
    console.log('ok',answerslist);
    
  }
}
