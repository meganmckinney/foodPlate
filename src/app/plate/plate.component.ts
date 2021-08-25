import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'fp-plate',
  templateUrl: './plate.component.html',
  styleUrls: ['./plate.component.css']
})
export class PlateComponent implements OnInit {

  plateImgPath: string = '../../assets/images/plateImages/';
  fruitEmpty: string = `${this.plateImgPath}fruit-empty.png`;
  grainDairyEmpty: string = `${this.plateImgPath}graindairy-empty.png`;
  proteinEmpty: string = `${this.plateImgPath}protein-empty.png`;
  vegEmpty: string = `${this.plateImgPath}veg-empty.png`;
  fruitFull: string = `${this.plateImgPath}fruit-full.png`;
  grainDairyFull: string = `${this.plateImgPath}graindairy-full.png`;
  proteinFull: string = `${this.plateImgPath}protein-full.jpg`;
  vegFull: string = `${this.plateImgPath}veg-full.jpg`;
  user: User;
  constructor(userService: UserService) {
    this.user = userService.getUser();
  }

  ngOnInit(): void {
  }

}
