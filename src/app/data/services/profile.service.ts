import { Profile } from './../interfaces/profile.interface';
import { Pageble } from './../interfaces/pageble.interface';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  http: HttpClient = inject(HttpClient);

  baseApiUrl: string = 'https://icherniakov.ru/yt-course/';

  getTestAccounts() {
    return this.http.get<Profile[]>(`${this.baseApiUrl}account/test_accounts`);
  }
  getSubscribersShortList(): Observable<Pageble<Profile>> {
    return this.http.get<Pageble<Profile>>(
      `${this.baseApiUrl}account/subscribers`
    );
    // .pipe(map((res) => res.items.slice(0, 3)));
  }
  getMe(): Observable<Profile> {
    return this.http.get<Profile>(`${this.baseApiUrl}account/me`);
  }
}
