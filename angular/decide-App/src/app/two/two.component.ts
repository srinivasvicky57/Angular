import { Component } from '@angular/core';
import { Output ,Input ,EventEmitter,OnInit } from '@angular/core';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrl: './two.component.css'
})
export class TwoComponent {
  @Input()  appValues:any;
  @Output() next =new EventEmitter<any>();

  ngOnInit(){
    console.log(this.appValues);
    
  }
  getResults(){
    const copyOfAppValues=this.appValues;
      copyOfAppValues.visiblePanel='three';
      this.next.emit(copyOfAppValues)
  }
}
