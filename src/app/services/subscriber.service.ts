import { Injectable } from '@angular/core';
import { Observable, observable, of } from 'rxjs';
import { Subscriber } from '../Subscriber'
import { SUBSCRIBERS } from '../mock-subscriber';

@Injectable({
  providedIn: 'root'
})
export class SubscriberService {

  constructor() { }

  getSubscribers(): Observable<Subscriber[]> {
    const subscribers = of(SUBSCRIBERS);
    return subscribers;
  }
}
