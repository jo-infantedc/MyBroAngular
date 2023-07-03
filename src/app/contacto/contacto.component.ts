import { Component, OnInit } from '@angular/core';
import { ContactoUsuario } from '../models/contacto.usuario';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  public usuario: ContactoUsuario;

  constructor(){ 
    this.usuario = new ContactoUsuario('','','','')
  }

  ngOnInit(): void {
    
  }

  onSubmit(): void{
    console.log("Evento Submit Lanzado");
    console.log(this.usuario);
  }

}
