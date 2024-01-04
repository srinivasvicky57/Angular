import { Component } from '@angular/core';
import { Output ,Input ,EventEmitter,OnInit } from '@angular/core';
import answerslist from '../utils/answers.json';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrl: './three.component.css'
})
export class ThreeComponent {
  @Input()  appValues:any;
  @Output() next =new EventEmitter<any>();
  ngOnInit(){
    const copyOfAppValues=this.appValues;
    const anw=answerslist.answers
    const res=anw[Math.floor(Math.random()*anw.length)]
    copyOfAppValues.answers=res
    this.next.emit(copyOfAppValues)
  }
  doItAgain(){
    const copyOfAppValues=this.appValues;
    const anw=answerslist.answers
    const res=anw[Math.floor(Math.random()*anw.length)]
    copyOfAppValues.answers=res
    this.next.emit(copyOfAppValues)
  }
  startAgain(){
this.next.emit({
  visiblePanel:'one',
  question:'',
  mode:false,
  answers:answerslist.answers,
  custom:[],
  answer:''
})
  }
}
