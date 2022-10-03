import { Component, OnInit, Input } from '@angular/core';
import { Subscriber } from '../../Subscriber';

@Component({
  selector: 'app-subscriber-item',
  templateUrl: './subscriber-item.component.html',
  styleUrls: ['./subscriber-item.component.css']
})
export class SubscriberItemComponent implements OnInit {
  @Input() subscriber!: Subscriber;

  constructor() { }

  ngOnInit(): void {
  }

}
