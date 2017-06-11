import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DuendeData } from '../../providers/duende-data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  formulario : any;

  constructor(public navCtrl: NavController, client: DuendeData) {
    client.get().subscribe(datos => this.loadDatos(datos, null)
      , err => this.loadDatos(null, err));
  }

  loadDatos(datos, err: string){

    if (err) {
      console.log(err);
      return;
    }

    this.formulario = datos;
  }

  refresh() {
    
    this.navCtrl.setRoot(HomePage);
  }



}
