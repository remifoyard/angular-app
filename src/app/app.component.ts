import { Component } from '@angular/core';
import {Service2Service} from "./service2.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[Service2Service]
})

export class AppComponent {
  public title: String;
  public affichage: String;
  public resultat: String;
  public title2: String;
  public personne: {};
  public liste;
  public liste2: [any];
  public tpajax;
  public leservice;

  constructor(private service2: Service2Service){
    this.title = 'TP ANGULAR JS 4';
    this.affichage = '';
    this.resultat = '';
    this.title2 = 'Détail personne';
    this.personne = { nom : 'Kent', prenom : 'Clark', description : 'Clark =  Superman.'};
    this.liste2 = [{titre : "Qu'est-ce que le Lorem Ipsum?", type :"warning", message :"Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker."},
      {titre : "Pourquoi l'utiliser?", type :"erreur", message :"On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour 'Lorem Ipsum' vous conduira vers de nombreux sites qui n'en sont encore qu'à leur phase de construction. Plusieurs versions sont apparues avec le temps, parfois par accident, souvent intentionnellement (histoire d'y rajouter de petits clins d'oeil, voire des phrases embarassantes)."},
      {titre : "D'où vient-il?", type :"info", message :"Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C., le rendant vieux de 2000 ans. Un professeur du Hampden-Sydney College, en Virginie, s'est intéressé à un des mots latins les plus obscurs, consectetur, extrait d'un passage du Lorem Ipsum, et en étudiant tous les usages de ce mot dans la littérature classique, découvrit la source incontestable du Lorem Ipsum. Il provient en fait des sections 1.10.32 et 1.10.33 du De Finibus Bonorum et Malorum (Des Suprêmes Biens et des Suprêmes Maux) de Cicéron. Cet ouvrage, très populaire pendant la Renaissance, est un traité sur la théorie de l'éthique. Les premières lignes du Lorem Ipsum, Lorem ipsum dolor sit amet..., proviennent de la section 1.10.32."}];
  this.leservice = service2;
    service2.requetePersonnes()
      .then(donnees => this.donneeChargee(donnees));
  }

  clickEnvoi() {
    this.leservice.modifPersonnes(this.liste);
  }

  donneeChargee = function(donnees) {
    var personnes = JSON.parse(donnees._body);
    this.liste = personnes;
    this.tpajax = this.liste.todoListes;
  }
  clickAjout() {
    let index = this.liste.todoListes.length;
    this.liste.todoListes[index] = {"name":"","elements":["",""]};
    this.leservice.modifPersonnes(this.liste);
  }
  clickSupp(index){
    this.liste.todoListes.splice(index, 1);
    this.leservice.modifPersonnes(this.liste);
  }

  trackByFn(index: any, item: any) {
    return index;
  }

  clickOn = function(chiffre){
    this.affichage += ""+chiffre;
  }
  clickEval = function(){
    this.resultat = eval(this.affichage);
  }
  clickOn2(p){ this.personne = p; }

}
