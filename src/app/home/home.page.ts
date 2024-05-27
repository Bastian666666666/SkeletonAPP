import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Importamos ActivatedRoute y Router
import { AlertController } from '@ionic/angular'; // Importamos AlertController

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit { // A esta clase existente agregamos la logica

  // Variables para llamar e insertar desde Login
  usuarioRecibido: string = ''; // Creamos una variable para recibir el usuario
  contrasenaRecibida: string = ''; // Creamos una variable para recibir la contraseña

  // Variables de la pagina Home
  nombre: String = ''; // Creamos una variable para digitar el nombre
  apellido: String = ''; // Creamos una variable para digitar el apellido
  nivelEducacion: String = ''; // Creamos una variable para digitar la educacion
  fechaNacimiento: String = ''; // Creamos una variable para digitar la fecha

  constructor(private activerouter: ActivatedRoute, private router: Router, private alertController: AlertController) {
    this.activerouter.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.usuarioRecibido = this.router.getCurrentNavigation()?.extras?.state?.['usuarioEnvio'];
      }
    });
  }

  //**Funcion para limpiar los campos del formulario
  async limpiarFormulario() {
    this.nombre = '';
    this.apellido = '';
    this.nivelEducacion = '';
    this.fechaNacimiento = '';
  }

  //**Funcion para mostrar un mensaje emergente
  async mostrarPopup() {
    const alert = await this.alertController.create({
      header: 'Información',
      message: `Usuario su nombre es ${this.nombre} ${this.apellido}`,
      buttons: ['OK']
    });

    await alert.present();
  }

  ngOnInit() {

  }

}