import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup } from '@angular/forms';
import { AddSubscriberComponent } from './add-subscriber.component';

describe('AddSubscriberComponent', () => {
  let component: AddSubscriberComponent;
  let fixture: ComponentFixture<AddSubscriberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSubscriberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSubscriberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have onSubmit function', () => {
    expect(component.onSubmit).toBeTruthy();
  });

  it('should have onReset function', () => {
    expect(component.onReset).toBeTruthy();
  });

  it('should have initalValues property and initalValues.subscriptionType should set to "Advanced"', () => {
    expect(component.initalValues).toBeTruthy();
    expect(component.initalValues.subscriptionType).toBe('Advanced');
  });

  it('should initialize isSubmitted property to be false', () => {
    expect(component.isSubmitted).toBe(false);
  });

  it('should create subscriberForm', () => {
    expect(component.subscriberForm).toBeInstanceOf(FormGroup);
  });

  it('should create correct fields in subscriberForm', () => {
    const fields: string[] = Object.keys(component.subscriberForm.value);
    expect(fields).toContain('email');
    expect(fields).toContain('password');
    expect(fields).toContain('conPassword');
    expect(fields).toContain('subscriptionType');
  });

  it('should create formControl for email. password and conPassword in subscriberForm', () => {
    expect(component.emailFormControl).toBeInstanceOf(FormControl);
    expect(component.passwordFormControl).toBeInstanceOf(FormControl);
    expect(component.conPasswordFormControl).toBeInstanceOf(FormControl);
  });

  it('should have a validator for each fields in subscriberForm', () => {
    expect(component.emailFormControl.validator?.length).toBe(1);
    expect(component.passwordFormControl.validator?.length).toBe(1);
    expect(component.conPasswordFormControl.validator?.length).toBe(1);
  });

  it('should render a form with class="add-form"', () => {
    const form: HTMLElement = fixture.nativeElement.querySelector("form")
    expect(form.className).toContain('add-form');
  });

  it('should render a email input field', () => {
    const email: HTMLElement = fixture.nativeElement.querySelector("#email")
    expect(email).toBeTruthy();
  });

  it('should render a Email label in subscriberForm', () => {
    const label: HTMLElement = fixture.nativeElement.querySelector("label[for='email']");
    expect(label.textContent).toBe('Email');
  });

  it('should render a password input field', () => {
    const password: HTMLElement = fixture.nativeElement.querySelector("#password")
    expect(password).toBeTruthy()
  });

  it('should render a Password label in subscriberForm', () => {
    const label: HTMLElement = fixture.nativeElement.querySelector("label[for='password']");
    expect(label.textContent).toBe('Password');
  });

  it('should render a conPassword input field', () => {
    const conPassword: HTMLElement = fixture.nativeElement.querySelector("#conPassword")
    expect(conPassword).toBeTruthy()
  });

  it('should render a Confirm Password label in subscriberForm', () => {
    const label: HTMLElement = fixture.nativeElement.querySelector("label[for='conPassword']");
    expect(label.textContent).toBe('Confirm Password');
  });

  it('should render a subscriptionType dropdown', () => {
    const subscriptionType: HTMLElement = fixture.nativeElement.querySelector("#subscriptionType")
    expect(subscriptionType).toBeTruthy()
  });

  it('should render a Choose a subscription Type label in subscriberForm', () => {
    const label: HTMLElement = fixture.nativeElement.querySelector("label[for='subscriptionType']");
    expect(label.textContent).toBe('Choose a subscription Type');
  });

  it('should initially hide all spans to alert invalid form or field', () => {
    const alet: HTMLElement = fixture.nativeElement.querySelector(".alert")
    expect(alet).toBeFalsy()
  });
});
