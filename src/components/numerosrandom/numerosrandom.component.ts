import {Component} from "@angular/core";

@Component({
    selector: "app-numeros-random",
    templateUrl: "./numerosrandom.component.html"
})
export class NumerosRandom {
    public numeros: Array<number>;
    constructor(){
        this.numeros = [5,7,14];
    }
    generarNumeros(){
        var aleat = Math.floor(Math.random()*100)+1;
        this.numeros.push(aleat);
    }
}