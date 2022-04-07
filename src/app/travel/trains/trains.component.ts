import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trains',
  templateUrl: './trains.component.html',
  styleUrls: ['./trains.component.css']
})
export class TrainsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  go() {
    this.router.navigate(['travel']);
  }
}
