import { Component, OnInit, Input } from '@angular/core';
import { Service1Service } from '../service1.service';

@Component({
  selector: 'box',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers:[Service1Service]
})
export class DetailComponent implements OnInit {

  @Input() liste;
  @Input() v;

  service1Service;
  constructor(service1 : Service1Service){
    this.service1Service = service1;
  }
  clickPersonne(){
    this.service1Service.ajoute();
    this.v = this.service1Service.donne();
  }

  ngOnInit(){}

}
