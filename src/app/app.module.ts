import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { HomeBtnComponent } from './home-btn/home-btn.component';
import { PlateComponent } from './plate/plate.component';
import { FoodGroupsModule } from './food-groups/food-groups.module';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, FooterComponent, MainComponent, HomeBtnComponent, PlateComponent, NavComponent
  ],
  imports: [
    BrowserModule, CommonModule, FoodGroupsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
