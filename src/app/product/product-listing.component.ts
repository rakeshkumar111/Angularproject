
import { Component } from "@angular/core";

@Component({
selector:'app-product-listing',
templateUrl:'product-listing.component.html'
})
export class ProductListingComponent {
    
    products:any[];
    cart:any[]=[];
    constructor() {
        this.products=[
            {id:1,name:"Shirt"},
            {id:2,name:"Pants"},
            {id:3,name:"Shoes"},
            {id:4,name:"Jeans"}
        ];
    }

    pushToCart(data){
        this.cart.push(data);
    }
}