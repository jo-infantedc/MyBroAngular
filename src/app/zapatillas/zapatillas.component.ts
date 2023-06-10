import { Component, OnInit } from "@angular/core";
import { Zapatillas } from "../models/zapatilla";

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html'
})
export class ZapatillasComponent implements OnInit {
    public titulo: string = "Componente de Zapatillas ;)";
    public zapatillas: Array<Zapatillas>;
    public marcas: String[];

    constructor(){
        this.zapatillas = [
            new Zapatillas('Nike Airmax', 'Nike', 'Blanco',40,true),
            new Zapatillas('Reebok Classic', 'Reebok', 'Blanco',80,true),
            new Zapatillas('Nike Runner MD', 'Nike', 'Negro',60,true),
            new Zapatillas('Adidas Yezzy', 'Adidas', 'Gris',180,false)
        ];
        this.marcas = new Array();
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


}
