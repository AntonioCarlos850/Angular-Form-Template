import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[ofAge]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: OfAgeDirective,
      multi: true
    }
  ]
})
export class OfAgeDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    const birth = new Date(control.value);
    const diff = Math.abs(new Date().getTime() - birth.getTime());

    if (Math.floor(diff / (1000 * 60 * 60 * 24 * 365)) < 18) {
      return {'ofAge': true};
    }

    return null;
  }
}
