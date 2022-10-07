import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// like imppoting HttpClient, HttpHeaders in subscriber.service.ts, this is for making http request to json-server
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { SubscribersComponent } from './components/subscribers/subscribers.component';
import { SubscriberItemComponent } from './components/subscriber-item/subscriber-item.component';
import { AddSubscriberComponent } from './components/add-subscriber/add-subscriber.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    SubscribersComponent,
    SubscriberItemComponent,
    AddSubscriberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
