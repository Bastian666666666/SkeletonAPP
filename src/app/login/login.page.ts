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
    if (this.usuario.length >= 3 && this.usuario.length <= 8 && /^[a-z0-9]+$/i.test(this.usuario) && /^[0-9]{4}$/.test(this.contrasena)) {
      let navigationExtras: NavigationExtras = {
        state: {
          usuarioEnvio: this.usuario,
          contrasenaEnvio: this.contrasena
        }
      }
      this.router.navigate(['/home'], navigationExtras);
    } else {
      // Mostrar un mensaje de error o hacer algo cuando el usuario o la contraseña son inválidos
    }
  }


} 