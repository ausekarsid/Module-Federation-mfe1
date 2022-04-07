import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.css'],
})
export class BusComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  go() {
    this.router.navigate(['travel']);
  }
}
