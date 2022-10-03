import { Component, OnInit } from '@angular/core';
import { Subscriber } from '../../Subscriber'
import { SUBSCRIBERS } from '../../mock-subscriber';

@Component({
  selector: 'app-subscribers',
  templateUrl: './subscribers.component.html',
  styleUrls: ['./subscribers.component.css']
})
export class SubscribersComponent implements OnInit {
  subscribers: Subscriber[] = SUBSCRIBERS;

  constructor() { }

  ngOnInit(): void {
  }

}
