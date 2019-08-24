import { Injectable, EventEmitter } from '@angular/core';
import { ServerSettings } from "../models/server-settings";

@Injectable({
  providedIn: 'root'
})
export class CommService {
  public reloadEvents$: EventEmitter<boolean>;
  public signInEvents$: EventEmitter<boolean>;
  public snackBarEvents$: EventEmitter<string>;
  public searchEvents$: EventEmitter<string>;
  
  public signedIn: boolean = false;
  public serverSettings: ServerSettings;

  public searchQuery: string;

  constructor() {
    this.reloadEvents$ = new EventEmitter();
    this.signInEvents$ = new EventEmitter();
    this.snackBarEvents$ = new EventEmitter();
    this.searchEvents$ = new EventEmitter();
  }

  reload(timeout: number = 500): void {
    setTimeout(() => this.reloadEvents$.emit(true), timeout);
  }

  signIn(): void {
    setTimeout(() => this.signInEvents$.emit(true), 500);    
  }

  signOut(): void {
    this.serverSettings.authorizationToken = null;
    this.signedIn = false;
  }

  showMessage(message: string) {
    this.snackBarEvents$.emit(message);    
  }

  search() {
    this.searchEvents$.emit(this.searchQuery);
  }
}
