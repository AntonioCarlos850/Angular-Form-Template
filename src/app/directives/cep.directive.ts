import { Directive } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { CepService } from '../services/cep.service';
import { Observable, map } from 'rxjs';

@Directive({
  selector: '[cepValidator]',
  providers: [{
    provide: NG_ASYNC_VALIDATORS,
    useExisting: CepDirective,
    multi: true
  }]
})
export class CepDirective implements AsyncValidator {

  constructor(private client: CepService) { }
  validate(control: AbstractControl<any, any>): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    const cep = control.value;
    return this.client.getCep(cep).pipe(
      map(
        (resp: any) => resp?.erro ? {'cepValidator': true} : null
      )
    );
  }
}
