import { TestBed } from '@angular/core/testing';

import { ChromeStorageService } from './chrome-storage.service';

describe('ChromeStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChromeStorageService = TestBed.get(ChromeStorageService);
    expect(service).toBeTruthy();
  });

  // this.serverSettings = new ServerSettings("bar", 321);

  // // set then get
  // chromeStorage.set(this.serverSettings).then((result) => {
  //   console.log("set serverSettings: "+result);
  //   if(result) {
  //     chromeStorage.get().then((serverSettings) => {
  //       console.log("get new serverSettings");
  //       console.log(serverSettings);
  //     });
  //   }
  // });

  // // clear the get
  // chromeStorage.clear().then((result) => {
  //   console.log("clear serverSettings: "+result);
  //   if(result) {
  //     chromeStorage.get().then((serverSettings) => {
  //       console.log("get serverSettings");
  //       console.log(serverSettings);
  //     });
  //   }
  // });  
});
