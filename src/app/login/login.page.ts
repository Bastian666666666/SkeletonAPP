import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router'; // Importamos Router y NavigationExtras

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

// **VARIABLES (VAN ARRIBA DEL CONSTRUCTOR)
export class LoginPage {
  usuario: string = '';
  contrasena: string = '';

  //**CONSTRUCTOR
  // Inyectamos el servicio Router al constructor
  constructor(private router: Router) { }

  //**METODOS (VAN ABAJO DEL CONSTRUCTOR)
  agregarDatos() {
    // 1. Validar el usuario y la contraseña
    if (this.usuario.length >= 3 && this.usuario.length <= 8 && /^\d{4}$/.test(this.contrasena)) {
      // 2. Mostrar los datos en la consola (para asegurar que se están guardando correctamente)
      console.log('Datos agregados');
      console.log('Usuario:', this.usuario);
      console.log('Contraseña:', this.contrasena);

      // 3. Crear un objeto con los datos del usuario y la contraseña usando NavigationExtras
      let navigationExtras: NavigationExtras = {
        state: {
          usuario: this.usuario,
          contrasena: this.contrasena
        }
      };
      // 4. Navegar a la página home y enviar los datos del usuario y la contraseña
      this.router.navigate(['/home'], navigationExtras);
    } else {
      console.log('Usuario o contraseña inválidos');
    }
  }
} 