import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Service2Service {

  liste = [];
  constructor(private http : Http){}
  requetePersonnes = function(){
    let myHeaders = new Headers();
    myHeaders.append( 'login', 'foyard')
    myHeaders.append( 'password', 'test')
    let options = new RequestOptions({ headers: myHeaders});
    return this.http
      .get("http://92.222.69.104:8080/todo/listes", options)
      .toPromise();
  }

  modifPersonnes(laliste){
    let liste = JSON.stringify(laliste);
    let url = "http://92.222.69.104:8080/todo/listes";
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(url, liste, options).toPromise();
  }

  donnePersonnes = function(){
    return this.liste;
  }

}
