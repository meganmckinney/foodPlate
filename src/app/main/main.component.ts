import { Component, Input, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'fp-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @Input() user: User;

  constructor(userService: UserService) {
    this.user = userService.getUser();
  }

  ngOnInit(): void {
  }

}
