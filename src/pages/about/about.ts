import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewsProvider } from '../../providers/news/news';
import {HealthPage } from '../health/health';
import{DisplayPage} from '../display/display';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
arry =[];
  constructor(public navCtrl: NavController , private news:NewsProvider ) {

  }


  more (cat){
    
   this.navCtrl.push(HealthPage , {category:cat});
   
   
   



  }

}
