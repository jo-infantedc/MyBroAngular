import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public identificado: boolean;

  constructor(){
    this.identificado = false;
  }

  setIdentificado(): void{
    this.identificado = true;
  }

  unsetIdentificado(): void{
    this.identificado = false;
  }

}
