import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Importamos ActivatedRoute y Router

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit { // A esta clase existente agregamos la logica
  usuarioRecibido: string = ''; // Creamos una variable para recibir el usuario
  contrasenaRecibida: string = ''; // Creamos una variable para recibir la contraseña

  constructor(private activerouter: ActivatedRoute, private router: Router) {
    this.activerouter.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.usuarioRecibido = this.router.getCurrentNavigation()?.extras?.state?.['usuarioEnvio'];
      }
    }
    );
  }

  ngOnInit() {

  }

}
