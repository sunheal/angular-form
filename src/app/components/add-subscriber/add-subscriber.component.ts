import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { CustomValidators } from '../../_helper/customValidators';
import { Subscriber } from '../../Subscriber';

@Component({
  selector: 'app-add-subscriber',
  templateUrl: './add-subscriber.component.html',
  styleUrls: ['./add-subscriber.component.css']
})
export class AddSubscriberComponent implements OnInit {
  @Output() onAddSubscriber: EventEmitter<Subscriber> = new EventEmitter();

  emailFormControl = new FormControl (null, {
    validators: [Validators.required, Validators.email],
    // updateOn: 'change' -- validate form when input change
    // updateOn: 'blur' -- validate form when user unfocus
    updateOn: 'blur'
    }
  )
  passwordFormControl = new FormControl (null, {
    validators: [Validators.required, Validators.pattern("^(?=.*[A-Za-z])(?=.*[@$!%*#?&])[A-Za-z0-9@$!%*#?&]{2,}$")],
    updateOn: 'blur'
    }
  )
  conPasswordFormControl = new FormControl (null, {
    validators: [Validators.required],
    updateOn: 'blur'
    }
  )

  subscriberForm: FormGroup = new FormGroup({
    email: this.emailFormControl,
    password: this.passwordFormControl,
    conPassword: this.conPasswordFormControl,
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

  onReset() {
    if (confirm('Are you sure to clear form?')) {
      this.subscriberForm.reset(this.initalValues);
      this.isSubmitted = false;
    }
  }
}
