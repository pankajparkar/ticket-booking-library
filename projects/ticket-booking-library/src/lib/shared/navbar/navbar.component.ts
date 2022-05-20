import { Component, Input, OnInit } from '@angular/core';
import { NavLink } from './../../models';

@Component({
  selector: 'bmc-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  @Input() navLinks: NavLink[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
