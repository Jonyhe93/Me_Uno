import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'registrate-component',
  templateUrl: './registrate.component.html',
  styleUrls: ['./registrate.component.css']
})
export class RegistrateComponent implements OnInit {

  modelForm: FormGroup;

  constructor(private usersServices: UsersService) {
    this.modelForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),

      email: new FormControl('', [
        // pattern valida expresiones regulares
        Validators.required,
        Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
      ]),

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



  async getDataForm() {
    let response = await this.usersServices.registerUser(this.modelForm.value);
    console.log(response)

  }

  checkControl(pControlName: string, pErrorName: string): boolean {
    if (this.modelForm.get(pControlName)?.hasError(pErrorName) && this.modelForm.get(pControlName)?.touched) {
      return true;
    } else {
      return false;
    }
  }

}
