import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.css']
})
export class HomeSliderComponent implements OnInit {

  choice: any;
  showDiv: any;
  constructor(
    private router:Router,
    private activatedRoute: ActivatedRoute
  ) { 
    this.choice = localStorage.getItem('choice');
  
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.showDiv = params['id'];
    });
  }

}
