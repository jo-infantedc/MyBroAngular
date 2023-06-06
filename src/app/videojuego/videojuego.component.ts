import { Component } from "@angular/core";

@Component({
    selector: 'videojuego',
    /* 
    //Esta es una forma de colocar la plantilla del componenete
    template: `
        <h2>Componente de Videojuego</h2>
        <ul>
            <li>GTA</li>
            <li>Prince of Persia</li>
            <li>Tekken</li>
            <li>Mario</li>
        </ul>     
    `
    */
   templateUrl: './videojuego.component.html'
})
export class VideojuegoComponent {

    //Definición de Propiedades
    public titulo: string;
    public listado: string;


    constructor(){
        console.log('Se ha cargado el componente: videojuego.component.ts')
        this.titulo = "Componente de Videojuego!!!....";
        this.listado = "listado de Videojuegos .....@$%";
    }
}