export class ServerSettings {
  server: string;
  port: number;
  authorizationToken: string;

  constructor(server: string = "http://localhost", port: number = 3000, authorizationToken: string = null) {
    this.server = server;
    this.port = port;
    this.authorizationToken = authorizationToken;
  }

  toJSON(): string {
    return JSON.stringify({server: this.server, port: this.port, authorizationToken: this.authorizationToken});
  }
}
