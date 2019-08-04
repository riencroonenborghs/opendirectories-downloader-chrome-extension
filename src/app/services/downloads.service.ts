import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { CommService } from './comm.service';
import { ChromeStorageService } from './chrome-storage.service';
import { Download } from "../models/download"

@Injectable({
  providedIn: "root"
})
export class DownloadsService {

  constructor(
    private httpClient: HttpClient,
    private chromeStorageService: ChromeStorageService,
    private commService: CommService
  ) { }

  get() {
    const url = this.buildFullPath("/api/v1/downloads.json");
    return this.httpClient.get(url);
  }

  create(download: Download) {
    const url = this.buildFullPath("/api/v1/downloads");
    return this.httpClient.post(url, {"download": download.toJSON()});
  }

  createFromBackgroundJS(url: string) {
    this.chromeStorageService.get().then(
      (serverSettings) => {
        this.commService.serverSettings = serverSettings;
        const createUrl = this.buildFullPath("/api/v1/downloads");
        let download: Download = new Download();
        download.url = url;
        this.httpClient.post(createUrl, {"download": download.toJSON()}).subscribe();
      },
      (error) => console.error("nope")
    );    
  }

  cancel(download: Download): any {
    const url = this.buildFullPath(`/api/v1/downloads/${download.id}/cancel`);
    return this.httpClient.put(url, {});
  }

  delete(download: Download): any {
    const url = this.buildFullPath(`/api/v1/downloads/${download.id}`);
    return this.httpClient.delete(url);
  }

  queue(download: Download): any {
    const url = this.buildFullPath(`/api/v1/downloads/${download.id}/queue`);
    return this.httpClient.put(url, {});
  }

  clear(): any {
    const url = this.buildFullPath(`/api/v1/downloads/clear`);
    return this.httpClient.post(url, {});
  }

  private buildFullPath(path): string {
    return `${this.commService.serverSettings.server}:${this.commService.serverSettings.port}${path}`;
  }
}
