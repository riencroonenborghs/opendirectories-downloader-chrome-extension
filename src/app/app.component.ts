import { Component } from '@angular/core';

import { MatDialog } from '@angular/material';
import { SignInDialogComponent } from './components/sign-in-dialog/sign-in-dialog.component';
import { AddDownloadDialogComponent } from './components/add-download-dialog/add-download-dialog.component';

import { ChromeStorageService } from './services/chrome-storage.service';
import { CommService } from './services/comm.service';
// for the chrome background script
import { DownloadsService } from './services/downloads.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'opendirectories-downloader';

  constructor(
    public commService: CommService,
    private dialog: MatDialog,
    private chromeStorageService: ChromeStorageService,
    // for the chrome background script
    private downloadsService: DownloadsService
  ) {
    this.validateToken();

    commService.signInEvents$.subscribe((signIn) => {
      this.validateToken();
    });
  }

  private validateToken() {
    this.chromeStorageService.get().then(
      (serverSettings) => {
        this.commService.serverSettings = serverSettings;
        if(this.commService.serverSettings.authorizationToken == null) {
          setTimeout(() => this.showLogin(), 500)
        } else {
          this.commService.signedIn = true;
          this.commService.reload();  
        }
      },
      (error) => setTimeout(() => this.showLogin(), 500)
    );
  }

  private showLogin() {
    this.dialog.open(SignInDialogComponent);    
  }

  addDownload() {
    let dialogRef = this.dialog.open(AddDownloadDialogComponent);
  }
}
