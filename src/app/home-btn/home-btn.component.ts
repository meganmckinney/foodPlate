import { Component, Input, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'fp-home-btn',
  templateUrl: './home-btn.component.html',
  styleUrls: ['./home-btn.component.css']
})
export class HomeBtnComponent implements OnInit {

  @Input()
  user: User;

  constructor(userService: UserService) {
    this.user = userService.getUser();
  }

  ngOnInit(): void {
  }

}
