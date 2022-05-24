import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {WebcamModule} from 'ngx-webcam';
import {MatDialogModule} from '@angular/material/dialog';
import {CameraDialog} from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    WebcamModule,
    MatDialogModule
  ],
  entryComponents:[CameraDialog],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
