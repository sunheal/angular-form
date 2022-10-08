import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { CustomValidators } from '../../_helper/customValidators';
import { SubscriberService } from '../../services/subscriber.service';
import { Subscriber } from '../../Subscriber';

@Component({
  selector: 'app-add-subscriber',
  templateUrl: './add-subscriber.component.html',
  styleUrls: ['./add-subscriber.component.css']
})
export class AddSubscriberComponent implements OnInit {
  @Output() onAddSubscriber: EventEmitter<Subscriber> = new EventEmitter();

  subscriberForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern("^(?=.*[A-Za-z])(?=.*[@$!%*#?&])[A-Za-z0-9@$!%*#?&]{2,}$")]),
    conPassword: new FormControl(null, [Validators.required]),
    subscriptionType: new FormControl('Advanced', [Validators.required])
  }, { validators: CustomValidators.passwordsNotMatching });

  initalValues = this.subscriberForm.value;
  isSubmitted = false;

  constructor() { }

  ngOnInit(): void {}

  // convenience getter for easy access to form fields
  get f() {
    return this.subscriberForm.controls;
  }

  onSubmit() {
    this.isSubmitted = true;
    console.log(this.isSubmitted);
    if (this.subscriberForm.valid) {
      const newSubscriber: Subscriber = {
        'email': this.subscriberForm.value.email,
        'password': this.subscriberForm.value.password,
        'subscriptionType': this.subscriberForm.value.subscriptionType,
        'start': new Date().toISOString()
      }
      this.onAddSubscriber.emit(newSubscriber);
      this.subscriberForm.reset(this.initalValues);
      this.isSubmitted = false;
    }
  }
}
