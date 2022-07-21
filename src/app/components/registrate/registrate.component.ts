import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'registrate-component',
  templateUrl: './registrate.component.html',
  styleUrls: ['./registrate.component.css']
})
export class RegistrateComponent implements OnInit {

  modelForm: FormGroup;

  constructor() {
    this.modelForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      age: new FormControl('', [
        this.ageValidator
      ]),
      mail: new FormControl('', [
        // pattern valida expresiones regulares
        Validators.required,
        Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
      ]),
      dni: new FormControl('', [
        this.dniValidator
      ]),
      type: new FormControl('', []),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(8)
      ]),
      repeatpassword: new FormControl('', []),
    }, [this.passwordValidator])
  }

  passwordValidator(pForm: AbstractControl) {
    const password = pForm.get('password')?.value;
    const repeatpassword = pForm.get('repeatpassword')?.value;

    if (password !== repeatpassword) {
      return { passwordvalidator: true }
    }

    return null
  }




  ngOnInit(): void {
  }

  dniValidator(pControlName: AbstractControl) {
    //intentar validar el dni que este bien escrito y que letra concuerde.
    const dni = pControlName.value;
    const letrasDni = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
    const expRegDni = /^\d{8}[A-Z]{1}/
    if (expRegDni.test(dni)) {
      //el dni esta bien escrito pero no significa que sea valido.
      const numero = Number(dni.substring(0, dni.length - 1)) //21345677
      const letra = dni[dni.length - 1]

      const position = numero % 23;

      return (letra !== letrasDni[position]) ? { dnivalidator: 'La letra no corresponde a tu dni' } : null

    } else {
      return { dnivalidator: 'formato del dni es incorrecto' }
    }

  }


  ageValidator(pControlName: AbstractControl) {
    //el controlName es objeto del campo que valido (age) y me sirve para obtener el value del campo.
    //OJO no deis por hecho que si el campo es de tipo de number devuelva un numero.
    const edad: number = parseInt(pControlName.value)

    //es mayor 18 y menor 65
    //es edad un numero
    if (isNaN(edad)) {
      return { agevalidator: 'La edad tiene que ser un numero' }
    } else if (edad < 18 || edad > 65) {
      return { agevalidator: 'La edad tiene que ser entre 18 y 65 años' }
    }

    return null
  }


  getDataForm() {
    console.log(this.modelForm.value)

  }

  checkControl(pControlName: string, pErrorName: string): boolean {
    if (this.modelForm.get(pControlName)?.hasError(pErrorName) && this.modelForm.get(pControlName)?.touched) {
      return true;
    } else {
      return false;
    }
  }

}
