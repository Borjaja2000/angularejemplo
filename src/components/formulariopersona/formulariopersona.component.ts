import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-formulariopersona',
  templateUrl: './formulariopersona.component.html',
  styleUrls: ['./formulariopersona.component.css']
})
export class FormulariopersonaComponent {

  public user: any;
      public mensaje: string;
      constructor(){
          //INICIAMOS EL OBJETO USER (MODEL)
          this.user = {
              nombre: "",
              apellidos: "",
              edad: 0
          };
          this.mensaje = "";
      }
      recibirDatos() {
          this.mensaje = "Datos recibidos";
          console.log(this.user);
      }
  

}
