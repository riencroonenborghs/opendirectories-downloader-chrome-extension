import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators"; 

import { CommService } from './comm.service';
import { ChromeStorageService } from './chrome-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient: HttpClient,
    private commService: CommService,
    private chromeStorageService: ChromeStorageService
  ) { }  

  signIn(email: string, password: string): Observable<boolean> {
    let signInUrl = this.buildFullPath("/users/sign_in");
    let data = {user: {email: email, password: password}};
    return new Observable((observer) => {
      this.httpClient.post(signInUrl, data).subscribe(
        (response) => {
          this.commService.serverSettings.authorizationToken = response["token"];
          this.chromeStorageService.set(this.commService.serverSettings).then((result) => {
            observer.next(true);
          });
        },
        (error) => observer.next(false)
      );
    });
  }

  signOut(): Observable<boolean> {
    return new Observable((observer) => {
      this.commService.signOut();
      this.chromeStorageService.set(this.commService.serverSettings).then((result) => {
        observer.next(true);
      });
    });
  }

  private buildFullPath(path): string {
    return `${this.commService.serverSettings.server}:${this.commService.serverSettings.port}${path}`;
  }
}
