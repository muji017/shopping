import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  productId!:number
  product!:Product
  constructor(
    private route:ActivatedRoute,
    private service:ProductService,
    private Router:Router
  ){}
  
  ngOnInit(){
  this.route.params.subscribe((params) => {
    const id = params['id'];
    this.productId = id;
    this.getProductDetails() 
  })
}
getProductDetails(){
  console.log(this.productId) 
  const id:number=this.productId
  this.service.getProductDetails(id).subscribe((res)=>{
    console.log(res);
    this.product=res
  })
}
buyNow(){
  this.Router.navigate(['/signUp'])
}
 
}
