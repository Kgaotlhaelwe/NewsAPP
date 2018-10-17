import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewsProvider } from '../../providers/news/news';
import {CategorydisplayPage} from '../../pages/categorydisplay/categorydisplay';


/**
 * Generated class for the HealthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-health',
  templateUrl: 'health.html',
})
export class HealthPage {

  arr= [];
  author ;
  description ;
  title ;
  image ;
  date ;
  
  arry=[];


  constructor(public navCtrl: NavController, public navParams: NavParams, private news:NewsProvider) {
    this.news.getNews(this.navParams.get("category")).then((data:any) =>{
      console.log(data);

     

      

      for(var i =0 ; i <= 6 ; i++){
      
        this.arr.push(data.articles[i])

       

      }

      })
  }


  item(a){
    //alert(a);
    this.navCtrl.push(CategorydisplayPage,{obj:a})
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad HealthPage');

  
  }

}
