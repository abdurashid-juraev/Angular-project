import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  http: HttpClient = inject(HttpClient);
  baseApiUrl: string = 'https://icherniakov.ru/yt-course/';
  getTestAccounts(): Observable<any> {
    return this.http.get(`${this.baseApiUrl}account/test_accounts`);
  }
}
