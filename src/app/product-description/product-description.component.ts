import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { ProductService } from '../product.service';
import { Album } from '../album';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {
  albumInfo: Album;

  constructor(private _productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      const id = +params['id'];
      this._productService.getAlbum(id)
      .subscribe(
        response => this.albumInfo = response
      );
    });
    // this._productService.getAlbum(1)
    //   .subscribe(
    //     response => this.albumInfo = response
    //   );
  }

}
