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
    let navigationExtras: NavigationExtras = {
      state: {
        usuarioEnvio: this.usuario,
        contrasenaEnvio: this.contrasena
      }
    }
    this.router.navigate(['/home'], navigationExtras);
  }


} 