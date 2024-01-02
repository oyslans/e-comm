import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http'
import { Observable } from "rxjs";


@Injectable({
  providedIn:'root'
})

export class DataService{

  constructor(private httpClient:HttpClient){

  }

  getData(){
    return this.httpClient.get('https://jsonplaceholder.typicode.com/posts')
  }

  getAllProducts():Observable<any[]>{
    return this.httpClient.get<any[]>("https://dummyjson.com/products")
  }

  insertValues(data: any){
    return this.httpClient.post("http://127.0.0.1:8000/api/add",data)
  }

  deleteValue(id:any){
    return this.httpClient.delete("http://127.0.0.1:8000/api/delete/"+id)
  }

}
