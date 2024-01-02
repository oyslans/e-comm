import { Component, OnInit} from '@angular/core';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  products:any
  productId :any

  constructor(private data_service:DataService){}

  ngOnInit(): void {
    this.fetchAll()
  }

  fetchAll(){
    this.data_service.getAllProducts().subscribe((res:any) => {
      let values = res
      this.products = values.products
      for (let i = 0; i < this.products.length; i++){
        this.products[i]['qty'] = 0
      }
      console.log(this.products)
    })
  }
  addToCart(value:any){
    value.qty += 1
  }
  removeFromCart(value:any){
    value.qty -= 1
  }

  buyNow(id:number){
    this.productId = id
  }
}
