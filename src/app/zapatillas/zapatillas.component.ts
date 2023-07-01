import { Component, OnInit } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";
import { EVENT_MANAGER_PLUGINS } from "@angular/platform-browser";
import { ZapatillaService } from "../services/zapatilla.service";

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html',
    providers: [ZapatillaService]
})
export class ZapatillasComponent implements OnInit {
    public titulo: string = "Componente de Zapatillas ;)";
    public zapatillas: Array<Zapatilla>;
    public marcas: String[];
    public color: string;
    public mi_marca: string;

    constructor(
        private _zapatillaService: ZapatillaService
    ){

        this.marcas = new Array();
        this.color = 'yellow';
        this.mi_marca = 'Fila';
        this.zapatillas = new Array<Zapatilla>;

    }    
    ngOnInit(): void {
        console.log('On Init de Zapatillas');
       // console.log(this.zapatillas);
        this.zapatillas =  this._zapatillaService.getZapatillas();
        alert(this._zapatillaService.getTexto());
        this.getMarcas();
    }


    getMarcas(): void{
        // this.zapatillas.forEach((value,index) =>{
        //    if(this.marcas.indexOf(value.marca)<0){
        //         this.marcas.push(value.marca);
        //     }
        // });

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
