import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {Response, Headers} from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private httpClient : HttpClient) { }
  id:number;
  private headers = new Headers({'content-type' : 'application/json'});
  products = [];
  fetchData = function(){
    this.httpClient.get("http://localhost:5555/products").subscribe(
      (res:Response)=>{
        this.products = res;
      }
    )
  }

  deleteProduct = function(id){
    if(confirm("Do you really want to delete?")){
      const url = `${"http://localhost:5555/products"}/${id}`;
      return this.httpClient.delete(url, {headers:this.headers}).subscribe((val)=>
    {
      this.fetchData();
    }
    )
    }
  }

  ngOnInit() {
    this.fetchData();
  }

}
