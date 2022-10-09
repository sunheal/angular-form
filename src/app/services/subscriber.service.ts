import { Injectable } from '@angular/core';
// HttpClient, HttpHeaders are for making http calls to json-server, like Fetch API in React, also need imoport HttpClientModule in app.module.ts
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subscriber } from '../Subscriber';

@Injectable({
  providedIn: 'root'
})
export class SubscriberService {
  private serverURL = 'http://localhost:3000/subscribers';

  constructor(private http:HttpClient) { }

  getSubscribers(): Observable<Subscriber[]> {
    return this.http.get<Subscriber[]>(this.serverURL);
  }

  addSubscriber(subscriber: Subscriber):Observable<Subscriber> {
    return this.http.post<Subscriber>(this.serverURL, subscriber);
  }

}
