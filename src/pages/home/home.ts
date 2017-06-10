import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DuendeData } from '../../providers/duende-data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  typ : String[];
  lab : String[];
  nam : String[];
  req : Boolean[];
  val : String[];


  constructor(public navCtrl: NavController, client: DuendeData) {
    client.get().subscribe(datos => this.loadDatos(datos, null)
      , err => this.loadDatos(null, err));
  }

  loadDatos(datos, err: string){

    if (err) {
      console.log(err);
      return;
    }

    this.typ = datos.typ;
    this.lab = datos.lab;
    this.nam = datos.nam;
    this.req = datos.req;
    this.val = datos.val;

  }
  

}
