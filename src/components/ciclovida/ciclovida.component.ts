import {Component, OnInit,DoCheck} from "@angular/core";
@Component({
    selector: "app-ciclos-vida",
    templateUrl: "./ciclovida.component.html"
})

export class CicloVida implements OnInit,DoCheck{
    public mensaje: string;
    cambiarMensaje(){
    
    }
    constructor(){
        console.log("Constructor, voy primero");
        this.mensaje = "Hoy es martes";
    }
    ngOnInit(): void {
        console.log("Ejecutando metodo OnInit()");
    }
    ngDoCheck(){
        console.log("Estoy en DoCheck")
    }
}