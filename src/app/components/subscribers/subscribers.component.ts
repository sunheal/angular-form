import { Component, OnInit } from '@angular/core';
import { SubscriberService } from '../../services/subscriber.service';
import { Subscriber } from '../../Subscriber'

@Component({
  selector: 'app-subscribers',
  templateUrl: './subscribers.component.html',
  styleUrls: ['./subscribers.component.css']
})
export class SubscribersComponent implements OnInit {
  subscribers: Subscriber[] = [];

  // need to add service in the constructor in order to use it in ngOnInit
  constructor(private subscriberService: SubscriberService) { }

  ngOnInit(): void {
    //.subscribe(() => {}) is like .then() in Promise
    this.subscriberService.getSubscribers().subscribe((subscribers) => this.subscribers = subscribers);
  }

}
