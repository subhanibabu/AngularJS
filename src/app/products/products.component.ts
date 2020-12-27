import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private currentRoute : ActivatedRoute) { }

  ngOnInit() {
    console.log('activated route parms : ',this.currentRoute);
  }

}
