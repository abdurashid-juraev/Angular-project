import { Component } from '@angular/core';
import { HomeSvgComponent } from '../svg-icon/home-svg/home-svg.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SubcriberCardComponent } from './subcriber-card/subcriber-card.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    HomeSvgComponent,
    CommonModule,
    RouterModule,
    SubcriberCardComponent,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  menuItems: { label: string; icon: string; link: string }[] = [
    {
      label: 'My page',
      icon: 'home',
      link: '',
    },
    {
      label: 'Chat',
      icon: 'chat',
      link: 'chats',
    },
    {
      label: 'Search',
      icon: 'search',
      link: 'search',
    },
  ];
}
