import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemberIDComponent } from './member-id/member-id.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { HttpClientModule } from '@angular/common/http';
import { FrontComponent } from './IDs/front/front.component';
import { BackComponent } from './IDs/back/back.component';
import { CardBackComponent } from './card-back/card-back.component';

@NgModule({
  declarations: [
    AppComponent,
    MemberIDComponent,
    FrontComponent,
    BackComponent,
    CardBackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PdfViewerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
