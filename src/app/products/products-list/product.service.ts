
import { Injectable } from '@angular/core';
import { IProduct } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  getProducts(): IProduct[] {
    return [{
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2019",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "assets/images/pika.png"
    },
    {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2019",
      "description": "15 gallon capacity rolling garden cart",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "assets/images/pika.png"
    },
    {
      "productId": 2,
      "productName": "Garden Shovel and Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2019",
      "description": "Heeeya!",
      "price": 32.99,
      "starRating": 2.8,
      "imageUrl": "assets/images/pika.png"
    }]
  }
}