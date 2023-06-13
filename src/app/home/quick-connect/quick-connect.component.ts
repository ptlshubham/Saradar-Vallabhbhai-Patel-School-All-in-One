import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quick-connect',
  templateUrl: './quick-connect.component.html',
  styleUrls: ['./quick-connect.component.css']
})
export class QuickConnectComponent implements OnInit {
  choice: any;
  constructor(
    private router: Router
  ) {
    
  }

  ngOnInit(): void {
    this.choice = localStorage.getItem('choice');
  }
  openLinks(id: any) {
    this.router.navigate(['/more/links', id]);
  }
}

