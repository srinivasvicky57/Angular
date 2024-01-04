import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private modalService: NgbModal) {
  }
  name=''
   loadedFeature='recipe';
   fromchild(event:any){
this.name=event
   }
  OnNavigate(feature:string){
    this.loadedFeature=feature
    console.log(feature);
  }
  public open(modal: any): void {
    this.modalService.open(modal);
  }
}
