import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class CustomValidators {

  static paawordsNotMatching: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const conPassword = control.get('conPassword')?.value;

    if (password && conPassword && password === conPassword) {
      return null;
    } else {
      return { paawordsNotMatching: true };
    }
  }

}

