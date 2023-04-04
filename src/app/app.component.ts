import { Component, OnInit } from '@angular/core';
import { OrderService } from './services/order.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  orders: any[] = [];
  loading: boolean = true;

  constructor(private orderService: OrderService) {
  }

  ngOnInit() {
    this.orderService.getOrders().subscribe(
      orders => {
        this.orders = orders;
        this.loading = false;
      },
      error => console.log(error)
    );
  }

}
