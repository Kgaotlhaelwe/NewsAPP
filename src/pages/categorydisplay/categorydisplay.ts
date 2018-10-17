import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewsProvider } from '../../providers/news/news';

/**
 * Generated class for the CategorydisplayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categorydisplay',
  templateUrl: 'categorydisplay.html',
})
export class CategorydisplayPage {
  obj=this.navParams.get("obj");

  author ;
  description ;
  title ;
  image ;
  date ;
  
  arry=[];

  cat =["business" ,"technology" , "sports"]


  constructor(public navCtrl: NavController, public navParams: NavParams , private news:NewsProvider) {

    for (this.navParams.get("obj") ; this.navParams.get("obj") < this.cat.length; this.navParams.get("obj")) {
      console.log(this.navParams.get("obj"));
      
     if(this.cat[this.navParams.get("obj")] == "business"){
      
       
      this.news.getNews(this.cat[this.navParams.get("obj")]).then((data:any) =>{
     
        this.obj =  data.articles[this.navParams.get("obj")]; 
        
        this.title =this.obj.title ;
        this.image=this.obj.urlToImage;
        this.description=this.obj.description;
        console.log(this.navParams.get("obj"));
        //console.log(index);
        
       })
       

         }

     }
}


  ionViewDidLoad() {
    console.log('ionViewDidLoad CategorydisplayPage');
  }

}
