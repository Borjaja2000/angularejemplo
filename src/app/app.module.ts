import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


import {PrimerComponente} from "../components/primercomponente.component";
import {CicloVida} from "../components/ciclovida/ciclovida.component";
import {Deportes} from "./../components/deportes/deportes.component";
import {NumerosRandom} from "./../components/numerosrandom/numerosrandom.component";
import { FormulariopersonaComponent } from './../../src/components/formulariopersona/formulariopersona.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,PrimerComponente,CicloVida,Deportes,NumerosRandom, FormulariopersonaComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
