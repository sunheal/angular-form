# AngularForm

This app is a subscribtion signup system for Armedia, LLC.
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.4.

## App Snapshot

<img width="65%" alt="armedia signup form" src="https://user-images.githubusercontent.com/91859887/194690249-1e12a8c5-46a9-4409-b71a-836b369bd9a9.png">

## App Features
* Email address (is required and should be an email address)
* A Dropdown list, allowing the user to select from three different Subscriptions ("Basic", "Advanced", "Pro")
Set "Advanced" as Default
* A Password field is required and must be 8 character long with at least one character and one special character)
* A Password confirmation field to ensure that passwords enter match before ‘Submit’ is allowed
* A Submit Button and A Clear Button
* Submit must check if all fields are filled in and contain valid data
* Clear button can be active at all times
* Save the data in the form to a file in JSON Format.  The file should contain all the above fields and Subscription Start/Created Date. The file can be on your local drive.
* Implement a data table below the Submit button on the same screen to present the above added subscribers from steps 1 through 6 with following column names Email Address, Subscription Type and Start/Created Date their respective data values.  This table should be cumulative of all the items submitted.
* Display a warning message if the Form is invalid and was touched but only after user has stopped typing. Display a warning message below each input if it's invalid and cumulative message at the top of the form with all the errors at the top of the form on submit. If form is modified and clear is clicked, prompt user confirming that they are sure to discard the changes.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## JSON server

Run `npm run server` for a json server. Navigate to `http://localhost:3000/` to navigate the json data in json server.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
