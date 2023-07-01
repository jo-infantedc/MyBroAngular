import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'; //Para trabajar con parámetros por url

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  public nombre: string;
  public followers: number;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
    
  ){
    this.nombre = "";
    this.followers = 0;
   }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      this.nombre = params['nombre'];
      this.followers = +params['followers']; //con el + adelante se convierte en tipo number
      console.log(this.nombre);
      console.log(this.followers);
      
      if(this.nombre == 'ninguno'){
        this._router.navigate(['/home']);
      }
    })
}

  redirigir(): void{
    this._router.navigate(['/zapatillas']); //Esto lo puedo tener para redirigir a cuallquier parte en cualquier momento
  }

}
