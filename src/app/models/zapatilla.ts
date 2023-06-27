export class Zapatilla{
   
    /* //Esta es la forma más larga
    public nombre: string;
    public marca: string;
    public color: string;
    public precio: number;
    public stock: boolean;

    constructor(nombre: string, marca: string, color: string, precio: number, stock:boolean){
        this.nombre = nombre;
        this.marca = marca;
        this.color = color;
        this.precio = precio;
        this.stock = stock;
    }
    */ 

    //Esta es la forma mas corta
    constructor(
        public nombre: string,
        public marca: string,
        public color: string,
        public precio: number,
        public stock: boolean
    ){}
   
}