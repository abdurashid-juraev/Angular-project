import { Component, Input } from '@angular/core';
import { Profile } from '../../data/interfaces/profile.interface';
import { ImgUrlPipe } from '../../helpers/pipes/img-url.pipe';
@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [ImgUrlPipe],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss',
})
export class ProfileCardComponent {
  @Input({ required: true }) profile!: Profile;
  // Validation
  ngOnInit() {
    this.validateProfile();
  }

  private validateProfile() {
    if (!this.profile?.id || !this.profile?.firstName) {
      throw new Error('Invalid profile data');
    }
  }
}
