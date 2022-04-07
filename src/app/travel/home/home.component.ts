import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}
  go(obj: string) {
    switch (obj) {
      case 'flights':
        this.router.navigate(['flights'], { relativeTo: this.route.parent });
        break;
      case 'train':
        this.router.navigate(['train'], { relativeTo: this.route.parent });
        break;
      case 'bus':
        this.router.navigate(['bus'], { relativeTo: this.route.parent });
        break;
    }
  }
}
