import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { AuthService } from "../../services/auth.service";
import { CommService } from "../../services/comm.service";

@Component({
  selector: 'app-sign-in-dialog',
  templateUrl: './sign-in-dialog.component.html',
  styleUrls: ['./sign-in-dialog.component.sass']
})
export class SignInDialogComponent implements OnInit {

  email: string;
  password: string;
  error: string = "";

  constructor(
    private dialogRef: MatDialogRef<SignInDialogComponent>,
    public commService: CommService,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  logIn(): void {
    this.authService.signIn(this.email, this.password).subscribe(
      res => {
        if(res) {
          this.dialogRef.close();
          this.commService.signedIn = true;
          this.commService.reload();
        } else {
          this.error = "Invalid authorization";
        }
      },
      error => {
        console.error(error);
        this.error = error.error.errors.join(", ");
      }
    );
  }

  onEnter(event) {
    if(event.keyCode == 13) {
      this.logIn();
    }
  }

}
