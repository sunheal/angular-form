import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// like imppoting HttpClient, HttpHeaders in subscriber.service.ts, this is for making http request to json-server
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SubscribersComponent } from './components/subscribers/subscribers.component';
import { AddSubscriberComponent } from './components/add-subscriber/add-subscriber.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SubscribersComponent,
    AddSubscriberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
