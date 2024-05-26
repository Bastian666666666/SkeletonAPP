import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  usuario: string = '';
  contrasena: string = '';

  constructor(private router: Router) { }

  agregarDatos() {
    // Validar el usuario y la contraseña
    if (this.usuario.length >= 3 && this.usuario.length <= 8 && /^\d{4}$/.test(this.contrasena)) {
      console.log('Datos agregados');
      console.log('Usuario:', this.usuario);
      console.log('Contraseña:', this.contrasena);

      let navigationExtras: NavigationExtras = {
        state: {
          usuario: this.usuario,
          contrasena: this.contrasena
        }
      };

      this.router.navigate(['/home'], navigationExtras);
    } else {
      console.log('Usuario o contraseña inválidos');
    }
  }
}