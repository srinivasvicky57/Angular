import { Component ,Input,EventEmitter, Output} from '@angular/core';
import {UserService} from '../service/user-service'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input() user:any;
  @Output() new=new EventEmitter();
  constructor(private userService:UserService){
   
  }
  addButton(item:string){
   this.userService.addUser(item)
  }
}
