import { Component,Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrl: './child-component.component.css'
})
export class ChildComponentComponent {
  name:string='srinu'
  @Output() newItemEvent = new EventEmitter<string>();
@Input() loadedFeature: any;
addNewItem() {
  this.newItemEvent.emit(this.name);
}
change(){
  console.log('change');
  
}
onChange(event: any){
  console.log('just',event);
  
}
}
