import { Component,Output ,Input ,EventEmitter,OnInit } from '@angular/core';
@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrl: './one.component.css'
})
export class OneComponent {
@Input()  appValues:any;
@Output() next =new EventEmitter<any>();

onAddQuestion(ques:any){
  const copyOfAppValues=this.appValues;
  if(ques.value !==''){
    copyOfAppValues.visiblePanel='two';
    copyOfAppValues.question=ques.value;

    this.next.emit(copyOfAppValues)
  }
}
ngOnInit(){
  console.log(this.appValues);
  
}
}
