import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { Service1Service } from './service1.service';
import { Service2Service } from './service2.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    DetailComponent
  ],
  imports: [BrowserModule,FormsModule,NgbModule.forRoot(),HttpModule],
  providers: [Service1Service, Service2Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
