import {Component, OnInit,DoCheck} from "@angular/core";
@Component({
selector:"app-primercomponente",
templateUrl:"./primercomponente.component.html"
})
export class PrimerComponente{
    public nombre: string;
    public anyo: number;

    constructor(){
        console.log("Creando el primer componente");
    }
}