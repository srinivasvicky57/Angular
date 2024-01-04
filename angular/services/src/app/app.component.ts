import { Component ,OnInit} from '@angular/core';
import { UserService } from './service/user-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users: { name: string }[] =[]
  title = 'services';
  constructor(private usrService:UserService){

   
  }
  ngOnInit(){
      this.users=this.usrService.users
  }
  
}
