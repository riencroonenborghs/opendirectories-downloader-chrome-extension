var app;

app = angular.module("downloader.constants", []);

app.constant("ICONS", {
  queued: "cloud",
  started: "cloud_download",
  finished: "done",
  error: "error",
  cancelled: "cloud_off"
});
