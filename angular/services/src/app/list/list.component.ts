import { Component ,Input,EventEmitter, Output} from '@angular/core'
import { UserService } from '../service/user-service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
@Input() user:any;
@Input() position:any;
@Output() new =new EventEmitter()
constructor(private userService:UserService){

}
onRemove(){
  
  this.userService.onRemove(this.position)
  
  
}
}
