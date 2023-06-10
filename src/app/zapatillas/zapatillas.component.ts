import { Component, OnInit } from "@angular/core";
import { Zapatillas } from "../models/zapatilla";
import { EVENT_MANAGER_PLUGINS } from "@angular/platform-browser";

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html'
})
export class ZapatillasComponent implements OnInit {
    public titulo: string = "Componente de Zapatillas ;)";
    public zapatillas: Array<Zapatillas>;
    public marcas: String[];
    public color: string;
    public mi_marca: string;

    constructor(){
        this.zapatillas = [
            new Zapatillas('Nike Airmax', 'Nike', 'Blanco',40,true),
            new Zapatillas('Reebok Classic', 'Reebok', 'Blanco',80,true),
            new Zapatillas('Nike Runner MD', 'Nike', 'Negro',60,true),
            new Zapatillas('Adidas Yezzy', 'Adidas', 'Gris',180,false)
        ];
        this.marcas = new Array();
        this.color = 'yellow';
        this.mi_marca = 'Fila';
    }    

    ngOnInit(): void {
        console.log('On Init de Zapatillas');
        console.log(this.zapatillas);
        this.getMarcas();
    }


    getMarcas(): void{
        this.zapatillas.forEach((value,index) =>{
           if(this.marcas.indexOf(value.marca)<0){
                this.marcas.push(value.marca);
            }
        });

        console.log(this.marcas);
    }

    getMarca(): void{
        alert(this.mi_marca);
    }

    addMarca(): void{
        this.marcas.push(this.mi_marca);
    }

    borrarMarca(indice: number):void{
        //delete this.marcas[indice];
        this.marcas.splice(indice, 1);
    }

    onBlur(): void{
        console.log('Has salido del input');
    }

    mostrarPalabra(): void{
        alert(this.mi_marca);
    }

}
