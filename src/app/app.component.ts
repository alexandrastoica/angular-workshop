import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface ILink {
  path: string;
  icon: string;
  title: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Workshop library';
  links: ILink[] = [
    { path: '/home', icon: 'home', title: 'Home' },
    { path: '/courses', icon: 'view_list', title: 'Courses' },
  ];

  constructor(private router: Router) {}

  logout(): void {
    this.router.navigateByUrl('/login');
  }
}
