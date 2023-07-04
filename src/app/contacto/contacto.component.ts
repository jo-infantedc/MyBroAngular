import { Component, OnInit } from '@angular/core';
import { ContactoUsuario } from '../models/contacto.usuario';
import { Form } from '@angular/forms';

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

  onSubmit(form:any): void{
    console.log("Evento Submit Lanzado");
    console.log(this.usuario);
    //form.reset();
  }

}
