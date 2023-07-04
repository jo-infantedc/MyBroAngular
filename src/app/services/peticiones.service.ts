import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class PeticionesServices{
    public url: string;
    constructor(
        public _http: HttpClient
    ){
        this.url = "https://reqres.in/"
    }

    getUser(userId:any): Observable<any>{
        return this._http.get(this.url+'api/users/'+userId);
    }

    //Para hacer una petición AJAX utilizando POST al método le tenemos que enviar datos en un "Json String"
    addUser(user: any): Observable<any>{
        let params = JSON.stringify(user); //Para convertir un objeto de JavaScript puro a Json String (un string que dentro tiene un Json)
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.post(this.url + 'api/users/',params, {headers: headers} );
    }

}