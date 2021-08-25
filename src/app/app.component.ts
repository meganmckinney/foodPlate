import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { User } from './model/user';
import { UserService } from './services/user.service';

@Component({
  selector: 'fp-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  @Input()
  user: User;

  constructor(private titleService: Title, userService: UserService) {
    this.user = userService.getUser();

  }

  ngOnInit(): void {
    this.titleService.setTitle('Welcome to Food plate!');

  }
}
