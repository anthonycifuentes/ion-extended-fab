import { Component } from '@angular/core';
import { Contacts } from './mock-data'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  contacts: any[];
  extended: boolean = true;
  constructor() {
    this.contacts= Contacts;
    console.log(this.contacts);
    
  }

  logScrolling(ev){
   this.extended = ev.detail.currentY === 0 ? true : false;
  }

}
