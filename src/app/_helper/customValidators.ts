import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class CustomValidators {

  static passwordsNotMatching: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const conPassword = control.get('conPassword')?.value;

    if (password && conPassword && password === conPassword) {
      return null;
    } else {
      return { passwordsNotMatching: true };
    }
  }

}

