import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { ApiService } from './api.service';
import { TripListComponent } from './trip-list/trip-list.component';
import { JourneyListComponent } from './journey-list/journey-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TripListComponent,
    JourneyListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [
    DataService,
    ApiService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
