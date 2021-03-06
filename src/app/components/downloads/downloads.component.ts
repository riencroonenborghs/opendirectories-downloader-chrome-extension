import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from '@angular/material/snack-bar';

import { Download } from "../../models/download"
import { DownloadsService } from "../../services/downloads.service";
import { CommService } from "../../services/comm.service";
import { ChromeStorageService } from "../../services/chrome-storage.service";

@Component({
  selector: "downloads",
  templateUrl: "./downloads.component.html",
  styleUrls: ["./downloads.component.sass"]
})
export class DownloadsComponent implements OnInit {

  private downloads: Download[] = [];
  queuedDownloads: Download[] = [];
  startedDownloads: Download[] = [];
  finishedDownloads: Download[] = [];
  failedDownloads: Download[] = [];
  cancelledDownloads: Download[] = [];
  busy: boolean = true;

  constructor(
    private downloadsService: DownloadsService,
    public commService: CommService,
    private snackBar: MatSnackBar,
    private chromeStorageService: ChromeStorageService
  ) {
    commService.reloadEvents$.subscribe((reload) => {
      this.getDownloads();
    });

    commService.snackBarEvents$.subscribe((message) => {
      this.showMessage(message);
    });

    commService.searchEvents$.subscribe((searchQuery) => {
      this.filterAllDownloads();
    });
  }

  ngOnInit() {    
  }

  getDownloads() {
    this.busy = true;
    this.resetDownloads();
    this.downloadsService.get().subscribe(
      (downloads: Download[]) => {
        this.downloads = downloads;
        this.filterAllDownloads();
        this.busy = false;
      },
      error => {
        if(error.status === 401) {
          this.commService.signOut();
          this.chromeStorageService.set(this.commService.serverSettings).then(
            (res) => {
              this.commService.signIn();
            },
            (error) => console.error(error)
          );
        }
      }
    );
  }

  private showMessage(message: string) {
    this.snackBar.open(message, "", {duration: 2000});
  }

  private resetDownloads() {
    this.downloads = [];
    this.queuedDownloads = [];
    this.startedDownloads = [];
    this.finishedDownloads = [];
    this.failedDownloads = [];
    this.cancelledDownloads = [];
  }

  private filterAllDownloads() {
    this.queuedDownloads = this.filterDownloads("queued");
    this.startedDownloads = this.filterDownloads("started");
    this.finishedDownloads = this.filterDownloads("finished");
    this.failedDownloads = this.filterDownloads("error");
    this.cancelledDownloads = this.filterDownloads("cancelled");
  }
  private filterDownloads(status: string) {
    return this.downloads.filter((download, index, array) => {
      if(this.commService.searchQuery != null && this.commService.searchQuery != "") {
        let re: RegExp = new RegExp(this.commService.searchQuery, "i");
        console.log("--------------");
        console.log(re);
        console.log(download.url);
        console.log(download.url.match(re));
        return download.status == status && download.url.match(re) != null;
      } else {
        return download.status == status;
      }
    }); 
  }
}
