import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-subscriber',
  templateUrl: './add-subscriber.component.html',
  styleUrls: ['./add-subscriber.component.css']
})
export class AddSubscriberComponent implements OnInit {
  // emailInput!: string;
  // passwordInput!: string;
  // confirmPasswordInput!: string;
  // chooseSubscriptions: string = 'Advanced';
  ngSelect: string = 'Advanced';

  subscriberForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
    conPassword: new FormControl(null, [Validators.required]),
    subscriptionType: new FormControl('Advanced')
  })

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.subscriberForm.value)
  }
}
