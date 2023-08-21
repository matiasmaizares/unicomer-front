import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public myForm: FormGroup = this.fb.group({
    type_document: ['', [Validators.required]],
    nro_document: [null, [Validators.required, Validators.pattern('^[0-9]*$')]],
    password: ['', [Validators.required]],
  });

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {}
  isValidField(field: string): boolean | null {
    return (
      this.myForm.controls[field].errors && this.myForm.controls[field].touched
    );
  }

  getFieldError(field: string): string | null {
    if (!this.myForm.controls[field]) return null;

    const errors = this.myForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido';
        case 'pattern':
          return 'Ingrese un valor numérico válido, sin puntos o comas';
        case 'number':
          return 'El valor debe ser un número válido';
        case 'minlength':
          return `Mínimo ${errors['minlength'].requiredLength} caracters.`;
      }
    }

    return null;
  }
  signIn() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    this.authService.loggin(this.myForm.value).subscribe(
      (data) => {
        this.router.navigate(['/home']);
        localStorage.setItem('token', data.token);
        localStorage.setItem('name', data.fullname);
        localStorage.setItem('usuarioId', data.id);
      },
      (error) => {
        if (error.status === 401) {
          Swal.fire({
            icon: 'error',
            title: 'Error de autenticación',
            text: 'Credenciales incorrectas. Por favor, verifica tus credenciales',
          });
        } else if (error.status === 400) {
          Swal.fire({
            icon: 'error',
            title: 'Error de registro',
            text: error.error.error,
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error en el servidor',
            text: 'Ha ocurrido un error en el servidor. Por favor, intenta nuevamente más tarde.',
          });
        }
      }
    );
  }
}
