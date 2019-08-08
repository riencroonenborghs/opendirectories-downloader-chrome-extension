import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CommService } from "../../services/comm.service";
import { AuthService } from "../../services/auth.service";
import { DownloadsService } from "../../services/downloads.service";
import { SettingsDialogComponent } from '../settings-dialog/settings-dialog.component';
// import { AddDownloadDialogComponent } from '../add-download-dialog/add-download-dialog.component';

@Component({
  selector: 'topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.sass']
})
export class TopbarComponent implements OnInit {
  
  clearing: boolean = false;
  reloading: boolean = false;

  constructor(
    public commService: CommService,
    private downloadsService: DownloadsService,
    private authService: AuthService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  settings() {
    this.dialog.open(SettingsDialogComponent);    
  }

  reload() {
    this.reloading = true;
    this.commService.reload();
    this.reloading = false;
  }

  clear() {
    this.clearing = true;
    this.downloadsService.clear().subscribe();
    this.commService.showMessage("Downloads cleared.");
    this.commService.reload();
    this.clearing = false;
  }

  // addDownload() {
  //   let dialogRef = this.dialog.open(AddDownloadDialogComponent);
  // }

  signOut() {
    this.authService.signOut().subscribe(
      (result) => this.commService.showMessage("Signed out."),
      (error) => console.error(error)
    );
  }

  signIn() {
    this.commService.signIn(); 
  }
}
