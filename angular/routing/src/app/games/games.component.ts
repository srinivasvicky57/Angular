import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {
  constructor(
    private route:Router
  ){}
loadLink(){
  this.route.navigate(['/'])
}
}
