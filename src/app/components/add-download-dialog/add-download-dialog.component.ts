import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

import { DownloadsService } from "../../services/downloads.service";
import { CommService } from "../../services/comm.service";

import { Download } from "../../models/download";

@Component({
  selector: 'app-add-download-dialog',
  templateUrl: './add-download-dialog.component.html',
  styleUrls: ['./add-download-dialog.component.sass']
})
export class AddDownloadDialogComponent implements OnInit {

  error: string = "";
  download: Download = new Download();
  presets = [
    {value: "*720*", label: "720"},
    {value: "*1080*", label: "1080"},
    {value: "*S01*", label: "Season 1"},
    {value: "*S02*", label: "Season 2"},
    {value: "*S03*", label: "Season 3"},
    {value: "*S04*", label: "Season 4"},
    {value: "*S05*", label: "Season 5"},
    {value: "*S06*", label: "Season 6"},
    {value: "*S07*", label: "Season 7"},
    {value: "*S08*", label: "Season 8"},
    {value: "*S09*", label: "Season 9"},
    {value: "*S10*", label: "Season 10"},
  ];
  audioFormats = ["best", "aac", "flac", "mp3", "m4a", "opus", "vorbis", "wav"];
  youtubeURL: boolean = false;

  constructor(
    private dialogRef: MatDialogRef<AddDownloadDialogComponent>,
    private downloadsService: DownloadsService,
    private commService: CommService
  ) { }

  ngOnInit() {
  }

  cancel() {
    this.dialogRef.close(false);
  }

  save() {
    this.downloadsService.create(this.download).subscribe((result) => {
      this.commService.showMessage("Download added.");
      this.dialogRef.close(false);
      this.commService.reload();
    });
  }

  parseURL() {
    this.youtubeURL = this.download.url.match(/youtu/) != null;
  }
}
