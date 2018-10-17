import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Alert } from 'ionic-angular';
import { NewsProvider } from '../../providers/news/news';
/**
 * Generated class for the DisplayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-display',
  templateUrl: 'display.html',
})
export class DisplayPage {


  obj = this.navParams.get('obj');
  arr= [];
  author ;
  description ;
  title ;
  image ;
  date ;
  
  arry=[];


  constructor(public navCtrl: NavController, public navParams: NavParams, private news:NewsProvider) {
    this.news.getNews('').then((data:any) =>{
     
      //alert(this.navParams.get("obj"));
      this.obj =  data.articles[this.navParams.get("obj")]; 
      console.log(this.obj);
      this.title =this.obj.title ;
      this.image=this.obj.urlToImage;
      this.description=this.obj.description;
      
      
      
      console.log( this.title);
      

      })
  }

  
  
  
  }


