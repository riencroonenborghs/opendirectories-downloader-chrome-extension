import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';

// authentication
import { HttpClientModule } from "@angular/common/http";
import { TokenInterceptorProviders } from "./interceptors/token-interceptor";

// material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule, MatProgressBarModule, MatExpansionModule, MatButtonModule, MatToolbarModule, MatIconModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatProgressSpinnerModule, MatSnackBarModule, MatBadgeModule, MatSelectModule, MatSlideToggleModule, MatGridListModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

//
import { AppComponent } from "./app.component";
import { DownloadsComponent } from './components/downloads/downloads.component';
import { DownloadDetailsComponent } from './components/download_details/download_details.component';
import { IconComponent } from './components/icon/icon.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { SignInDialogComponent } from './components/sign-in-dialog/sign-in-dialog.component';
import { SettingsDialogComponent } from './components/settings-dialog/settings-dialog.component';
import { AddDownloadDialogComponent } from './components/add-download-dialog/add-download-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    DownloadsComponent,
    DownloadDetailsComponent,
    IconComponent,
    TopbarComponent,
    SignInDialogComponent,
    SettingsDialogComponent,
    AddDownloadDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    // material
    BrowserAnimationsModule,
    // NoopAnimationsModule,
    FlexLayoutModule,
    MatTabsModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatBadgeModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatGridListModule
  ],
  entryComponents: [
    SignInDialogComponent,
    SettingsDialogComponent,
    AddDownloadDialogComponent
  ],
  providers: [TokenInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
