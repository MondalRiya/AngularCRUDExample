import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {Response, Headers} from '@angular/http';
import{ActivatedRoute} from '@angular/router';
import{Router} from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  id: number;
  data:object = {};
  products=[];
  productsObj:object={};
  private headers = new Headers({'content-type' : 'application/json'});
  constructor(private router:Router, private route : ActivatedRoute, private httpClient : HttpClient) { }

  updateProduct(product){
     
  }

  ngOnInit() {

    this.route.params.subscribe(params=>{
      this.id = +params['id'];
    }
    );
    this.httpClient.get("http://localhost:5555/products").subscribe(
      (res:Response)=>{
        //res = JSON.parse(res['_body']);
        this.products = res;
        for(var i=0; i<this.products.length;i++){
          if(parseInt(this.products[i].id)===this.id){
              this.data = this.products[i];
              break;

          }
        }
      }
    )
  }

}
