import { Component, OnInit } from '@angular/core';
import { PeticionesServices } from '../services/peticiones.service';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesServices]
})
export class ExternoComponent implements OnInit {

  public user: any;
  public userId: any;
  public fecha: any;

  constructor(
    private _peticionesService: PeticionesServices
  ){ 
    this.userId = 1;
  }

  ngOnInit(): void {
    this.cargaUsuario();
    //this.fecha = new Date(); //Me mostraría la fecha en formato largo
    this.fecha = new Date(2023, 10, 14);
  }

  cargaUsuario(){
    //this.user = false; //Si queremos que el cargando salga siempre al cambiar de usuario
    this._peticionesService.getUser(this.userId).subscribe(
      result => {
        this.user = result.data;
        //console.log(result);
      },
      error => {
        console.log(<any>error);
      }
    )
  }

}
