import { Component ,OnInit} from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.css'
})
export class SubjectComponent {
  subject$ = new Subject();
  ngOnInit(){
    this.subject$.subscribe(val => {
      console.log(val);
    });
 
    this.subject$.next("1");
    this.subject$.next("2");
    this.subject$.complete();
}
}

 