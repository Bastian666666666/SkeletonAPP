import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Importamos ActivatedRoute y Router

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage { // A esta clase existente agregamos los campos de la clase Usuario

  usuario!: string;
  contrasena!: string;
  nombre!: string;
  apellido!: string;
  nivelEducacion!: string;
  fechaNacimiento!: string;


  constructor(private route: ActivatedRoute, private router: Router) {


  }

}
