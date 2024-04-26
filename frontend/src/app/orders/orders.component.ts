import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private OrderService: OrderService) { }
  total: number = 0
  orders: any
  displayedColumns: string[] = ['ID', 'Référence', 'Nouveau client', 'Livraison', 'Client', 'Total', 'Paiement', 'État', 'Date'];

  ngOnInit(): void {

    this.OrderService.getAllOrders().subscribe(result => {
      this.orders = result;

      this.total = this.OrderService.calculateSum(result, 'Total');
    })
  }





}
