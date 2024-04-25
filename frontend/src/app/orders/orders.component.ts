import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private OrderService: OrderService) { }

  orders: any

  ngOnInit(): void {

    this.OrderService.getAllOrders().subscribe(result => {
      this.orders = result;
    })
  }






}
