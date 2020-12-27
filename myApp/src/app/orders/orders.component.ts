import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private currentRoute : ActivatedRoute) { }

  ngOnInit() {
    console.log('CurrentRoute : ',this.currentRoute);
    console.log('Id : ',this.currentRoute.snapshot.params['id'])    
  }
  
}
