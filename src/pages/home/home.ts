import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewsProvider } from '../../providers/news/news';
import{DisplayPage} from '../display/display';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

arr= [];
author ;
description ;
title ;
image ;
date ;

arry=[];

  constructor(public navCtrl: NavController , private news:NewsProvider) {

    this.news.getNews('').then((data:any) =>{
      console.log(data);

     

      this.image =data.articles[0].urlToImage ;

      this.title=data.articles[0].title ;
      this.description =data.articles[0].description ;
      this.date= data.articles[0].publishedAt;

      for(var i = 0 ; i < 5 ; i++){
        this.arry.push(data.articles[i] );
        
       

      }

      })

  }

  

  item(a){
   
    this.navCtrl.push(DisplayPage,{obj:a});

  }

}


export class News {
    image ;
    title;
    description ;
  
  constructor(image , title ,description){
    this.image=image ;
    this.title=title;
    this.description=description ;

  }
}
