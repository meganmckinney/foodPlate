import { Inject, Injectable } from '@angular/core';
import { User } from '../model/user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserStatusService {

  user: User;
  registered: boolean;

  constructor(userService: UserService) {
    this.user = userService.getUser();
    this.registered = false;
  }

  getRegisteredStatus(currentUser: any) {
    if(currentUser.registered === true) {
      console.log(`User Registered is: ${currentUser.registered}`)
    }
  }

  getUserStatus(currentUser: any) {
    console.table(currentUser);
  }
}
