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
    this.subscriberService
      .getSubscribers()
      .subscribe(
        (subscribers: Subscriber[]) => this.subscribers = subscribers
      );
  }

  deleteSubscriber(subscriber: Subscriber) {
    this.subscriberService
      // when the X is clicked: 4. the deleteSubscriber function calls subscriberService's deleteSubscriber function that will delete the clicked subcriber from db.
      .deleteSubscriber(subscriber)
      // when the X is clicked: 5. the subscribe function below
      .subscribe(
        // delete a subscriber by filtering out its id
        () => {this.subscribers.filter(remainingSubscriber => remainingSubscriber.id !== subscriber.id)}
      )
  }
}
