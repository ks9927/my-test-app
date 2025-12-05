import { Component } from '@angular/core';
import { HomeComp } from '../home-comp/home-comp';
import { AboutComp } from '../about-comp/about-comp';
@Component({
  selector: 'app-header',
  imports: [HomeComp, AboutComp],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

}
