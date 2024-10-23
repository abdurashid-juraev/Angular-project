import { CommonModule, JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileCardComponent } from './common-ui/profile-card/profile-card.component';
import { Profile } from './data/interfaces/profile.interface';
import { ProfileService } from './data/services/profile.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProfileCardComponent, JsonPipe, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  profileService = inject(ProfileService);
  profiles: Profile[] = [];
  constructor() {
    this.profileService.getTestAccounts().subscribe((val: Profile[]) => {
      this.profiles = val;
      console.log(val);
    });
  }
}
