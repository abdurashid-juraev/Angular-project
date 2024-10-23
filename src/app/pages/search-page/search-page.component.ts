import { ProfileService } from './../../data/services/profile.service';
import { Component, inject } from '@angular/core';
import { Profile } from '../../data/interfaces/profile.interface';
import { ProfileCardComponent } from '../../common-ui/profile-card/profile-card.component';
@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [ProfileCardComponent],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss',
})
export class SearchPageComponent {
  profiles: Profile[] = [];
  profileService = inject(ProfileService);
  constructor() {
    this.profileService.getTestAccounts().subscribe((val: Profile[]) => {
      this.profiles = val;
      console.log(val);
    });
  }
}
