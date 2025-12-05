import { Component } from '@angular/core';
import { HomeComp } from '../home-comp/home-comp';
@Component({
  selector: 'app-header',
  imports: [HomeComp],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

}
