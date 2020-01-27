export class Download {
  // internals
  id:number;
  job_id:string;
  weight:number;
  // basics
  url:string;
  name:string;
  user: {id: 1, email: "rien@croonenborghs.net"}
  // status
  status:string;
  error:string;
  // settings
  audio_format:string;
  audio_only:boolean;
  download_subs:boolean;
  srt_subs:boolean;
  file_filter:string;
  http_username:string;
  http_password:string;
  // date+times
  created_at:string;
  updated_at:string;
  queued_at:string;
  started_at:string;
  finished_at:string;
  cancelled_at:string;

  toJSON() {
    this.parseUrl();
    return JSON.stringify({
      "url": this.url,
      "audio_format": this.audio_format,
      "audio_only": this.audio_only,
      "download_subs": this.download_subs,
      "srt_subs": this.srt_subs,
      "file_filter": this.file_filter,
      "http_username": this.http_username,
      "http_password": this.http_password
    });
  }

  private parseUrl() {
    if(this.url.match(/\:\/\/released.tv\/files\/(.*)/) != null) {
      this.http_username = "released";
      this.http_password = "released";
    }
  }

  parseUrlIntoName() {
    if(this.url.match("magnet\:")) {
      this.url.split("&").forEach((part) => {
        let pair = part.split("=");
        if(decodeURIComponent(pair[0]) == "dn") {
          this.name = pair[1];
        }
      });
    } else { 
      this.name = this.url;
      console.log(this.url);
      console.log(this.name);
    }
  }
}