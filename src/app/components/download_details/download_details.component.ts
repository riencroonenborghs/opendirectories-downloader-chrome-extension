import { Component, OnInit, Input } from "@angular/core";

import { Download } from "../../models/download";
import { DownloadsService } from "../../services/downloads.service";
import { CommService } from "../../services/comm.service";

@Component({
  selector: "download-details",
  templateUrl: "./download_details.component.html",
  styleUrls: ["./download_details.component.sass"]
})
export class DownloadDetailsComponent implements OnInit {

  @Input() download: Download;

  removing: boolean = false;
  queueing: boolean = false;
  cancelling: boolean = false;

  constructor(
    private downloadsService: DownloadsService,
    private commService: CommService
  ) { }

  ngOnInit() {
  }

  remove(download: Download) {
    this.removing = true;
    this.downloadsService.delete(download).subscribe();
    this.commService.showMessage("Download removed.");
    this.commService.reload();
  }

  queue(download: Download) {
    this.queueing = true;
    this.downloadsService.queue(download).subscribe();
    this.commService.showMessage("Download queued.");
    this.commService.reload();
  }

  cancel(download: Download) {
    this.cancelling = true;
    this.downloadsService.cancel(download).subscribe();
    this.commService.showMessage("Download cancelled.");
    this.commService.reload();
  }
}
