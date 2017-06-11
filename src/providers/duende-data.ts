import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class DuendeData {

  constructor(public http: Http) {
    console.log('Hello DuendeData Provider');
  }

  get(): Observable<any>{
    let contentType = new Headers({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST",
      "Access-Control-Allow-Headers": "X-AMZ-META-TOKEN-ID, X-AMZ-META-TOKEN-SECRET"
    });

    let options = new RequestOptions(contentType);
    return this.http.get("http://34.194.15.225/form-fields", options)
      .map(this.processResponse).catch(this.processError);
  }

  private processResponse(response:Response){
    
    let body = response.json();

    console.log(body);
    
    let datos = body;
    return datos;

  }

  private processError () {
    return Observable.throw("Error al cosumir el servicio");
  }

}
