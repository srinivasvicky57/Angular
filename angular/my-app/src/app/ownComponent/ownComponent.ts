import { Component } from '@angular/core';

@Component({
  selector: 'own-component',
  templateUrl: './ownComponent.html',
})
export class ownComponent{
    clicked=false;
    onClick(){
        this.clicked=!this.clicked
    }

}