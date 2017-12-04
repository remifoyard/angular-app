import { Injectable } from '@angular/core';

@Injectable()
export class Service1Service {
  compteur = 0;
  ajoute(){
    this.compteur ++;
  }
  donne(){
    return this.compteur;
  }
}
