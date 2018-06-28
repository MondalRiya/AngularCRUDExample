import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {Response, Headers} from '@angular/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private httpClient : HttpClient) { }
  message: string = "New product has been added";
  addFlag: boolean = false;
  productObj : object = {};
  addNewProduct = function(product){
    this.productObj = {
      "name" : product.name,
      "color" : product.color
    }
    console.log(this.productObj)
    this.httpClient.post("http://localhost:5555/products/", this.productObj).subscribe((res:Response)=>{
      console.log(res);
      this.addFlag = true;
    })
  
  
  }
  ngOnInit() {
  }

}
