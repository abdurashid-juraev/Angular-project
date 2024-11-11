import { ProfileService } from './../../data/services/profile.service';
import { Component, inject } from '@angular/core';
import { HomeSvgComponent } from '../svg-icon/home-svg/home-svg.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
// import { SubcriberCardComponent } from './subcriber-card/subcriber-card.component';
// import { ImgUrlPipe } from '../../helpers/pipes/img-url.pipe';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    HomeSvgComponent,
    // ImgUrlPipe,
    CommonModule,
    RouterLink,
    // SubcriberCardComponent,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  profileService: ProfileService = inject(ProfileService);
  me = this.profileService;

  subscribers$ = this.profileService.getSubscribersShortList();

  menuItems: { label: string; icon: string; link: string }[] = [
    {
      label: 'My page',
      icon: 'home',
      link: 'profile/me',
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
