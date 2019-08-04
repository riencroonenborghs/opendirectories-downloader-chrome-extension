import { Injectable } from "@angular/core";

import { ServerSettings } from "../models/server-settings"

@Injectable({
  providedIn: "root"
})

export class ChromeStorageService {
  private storeKey:string = "serverSettings";

  constructor() { }

  get(): Promise<ServerSettings> {
    return new Promise((resolve, reject) => {
      let storageData = localStorage.getItem(this.storeKey);
      if(storageData != null) {
        let data = JSON.parse(storageData);
        resolve(new ServerSettings(data.server, data.port, data.authorizationToken));
      } else {
        resolve(new ServerSettings());
      }
    });
  }

  set(serverSettings): Promise<boolean> {
    return new Promise((resolve, reject) => {
      try {
        localStorage.setItem(this.storeKey, serverSettings.toJSON());
        resolve(true);
      } catch(_) {
        resolve(false);
      }
    });
  }

  clear(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      localStorage.removeItem(this.storeKey);
      resolve(true);
    });
  }
}
