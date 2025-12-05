import { Component } from '@angular/core';
import { HomeComp } from '../home-comp/home-comp';
import { AboutComp } from '../about-comp/about-comp';
import { ContactComp } from '../contact-comp/contact-comp';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HomeComp, AboutComp, ContactComp],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

}
