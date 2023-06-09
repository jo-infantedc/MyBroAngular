import { Component } from '@angular/core';
import { Configuracion } from './models/configuracion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'aprendiendo-angular';
  public description: string;
  public color: string;
  public componentConfig;
  public mostrar_videojuegos: boolean = true;
  

  constructor(){
    this.title = Configuracion.titulo;
    this.description = Configuracion.descripcion;
    this.color = Configuracion.fondo;
    this.componentConfig = Component;
  }


  public ocultarMostrarVideojuegos(value: boolean){
    this.mostrar_videojuegos = value;
  }

  

}
