import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { CustomValidators } from '../../_helper/customValidators';

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

  subscriberForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    conPassword: new FormControl(null, [Validators.required]),
    subscriptionType: new FormControl('Advanced', [Validators.required])
  }, { validators: CustomValidators.paawordsNotMatching });

  constructor() { }

  ngOnInit(): void {}

  // convenience getter for easy access to form fields
  get f() {
    return this.subscriberForm.controls;
  }

  onSubmit() {
    console.log(this.subscriberForm.value);
    console.log(this.subscriberForm.controls)
  }
}
