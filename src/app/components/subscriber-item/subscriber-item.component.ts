import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subscriber } from '../../Subscriber';
import { faTimes } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-subscriber-item',
  templateUrl: './subscriber-item.component.html',
  styleUrls: ['./subscriber-item.component.css']
})
export class SubscriberItemComponent implements OnInit {
  @Input() subscriber!: Subscriber;
  // For the delete button 'X' to delete subscribers
  @Output() onDeleteSubscriber: EventEmitter<Subscriber> = new EventEmitter();
  // frontAwsom Icon 'X'
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  // when the X is clicked: 2. The onDelete function calls the onDeleteSubscriber EventEmitter that emit an event in which the subscriber was clicked and deleted
  onDelete(subscriber: Subscriber): void {
    this.onDeleteSubscriber.emit(subscriber);
  }
}
