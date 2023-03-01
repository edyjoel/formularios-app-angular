import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidatorService {
  public nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  constructor() {}

  public noPuedeSerStrider = (
    control: FormControl
  ): ValidationErrors | null => {
    const valor: string = control.value?.trim().toLowerCase();
    if (valor === 'strider') {
      return {
        noStrider: true,
      };
    }
    return null;
  };

  public camposIguales(campo1: string, campo2: string) {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const pass1Control = formGroup.get(campo1);
      const pass2Control = formGroup.get(campo2);

      if (pass1Control?.value === pass2Control?.value) {
        pass2Control?.setErrors(null);
        return null;
      }

      pass2Control?.setErrors({ noEsIgual: true });
      return { noEsIgual: true };
    };
  }
}
