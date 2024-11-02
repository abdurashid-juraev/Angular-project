import { Component } from '@angular/core';
import { HomeSvgComponent } from '../svg-icon/home-svg/home-svg.component';
// import { HomeSvgComponent } from '../svg-icon/home-svg/home-svg.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [HomeSvgComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {}
