import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fp-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  isCurrent: boolean =  false;
  logoAlt: string = 'FoodPlate logo'
  versionString: string = '1.0.0';
  icon: string = 'assets/images/icons/icons-29.png'

  constructor() { }

  ngOnInit(): void {
  }

  moreInfo() {
    window.alert('for more info see choosemyplate.gov');
  }

}
