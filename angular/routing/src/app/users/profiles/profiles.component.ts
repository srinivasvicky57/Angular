import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrl: './profiles.component.css'
})
export class ProfilesComponent {
  constructor(
    private activatedRoute:ActivatedRoute
  ){

  }
  ngOnInit(){
    console.log(this.activatedRoute.snapshot.fragment);
    console.log(this.activatedRoute.snapshot.queryParams);

  }
}
