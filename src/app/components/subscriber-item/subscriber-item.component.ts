import { Component, OnInit, Input } from '@angular/core';
import { Subscriber } from '../../Subscriber';
import { faTimes } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-subscriber-item',
  templateUrl: './subscriber-item.component.html',
  styleUrls: ['./subscriber-item.component.css']
})
export class SubscriberItemComponent implements OnInit {
  @Input() subscriber!: Subscriber;
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

}
