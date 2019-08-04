import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { ChromeStorageService } from '../../services/chrome-storage.service';
import { ServerSettings } from "../../models/server-settings";


@Component({
  selector: 'app-settings-dialog',
  templateUrl: './settings-dialog.component.html',
  styleUrls: ['./settings-dialog.component.sass']
})
export class SettingsDialogComponent implements OnInit {
  server: string;
  port: number;
  private authorizationToken: string;
  error: string = "";

  constructor(
    private dialogRef: MatDialogRef<SettingsDialogComponent>,
    private chromeStorageService: ChromeStorageService
  ) { }

  ngOnInit() {
    this.chromeStorageService.get().then(
      (res) => {
        this.server             = res.server;
        this.port               = res.port;
        this.authorizationToken = res.authorizationToken;
      },
      (error) => console.error(error)
    );
  }

  cancel() {
    this.dialogRef.close(false);
  }

  save() {
    let serverSettings: ServerSettings = new ServerSettings(this.server, this.port, this.authorizationToken);
    this.chromeStorageService.set(serverSettings).then(
      (res) => {
        this.dialogRef.close(true);
      },
      (error) => console.error(error)
    );    
  }
}
