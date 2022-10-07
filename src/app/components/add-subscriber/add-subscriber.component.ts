import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-subscriber',
  templateUrl: './add-subscriber.component.html',
  styleUrls: ['./add-subscriber.component.css']
})
export class AddSubscriberComponent implements OnInit {
  emailInput!: string;
  password!: string;
  confirmPassword!: string;
  chooseSubscriptions: string = 'Advanced';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    // if (!this.email) {
    //   this.emailMessage = 'Invalid email';
    //   return;
    // }
  }
}
