import { Component, Input, OnInit } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { Product } from 'shell/products';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pdp-content',
  templateUrl: './pdp-content.component.html',
  styleUrls: ['./pdp-content.component.css'],
})
export class PdpContentComponent implements OnInit {
  public product: Product | null = null;
  public price: number = 0;

  constructor(private route: ActivatedRoute) {}

  async ngOnInit(): Promise<void> {
    const { getProductById, currency } = await loadRemoteModule({
      remoteEntry: 'http://localhost:3000/remoteEntry.js',
      remoteName: 'shell',
      exposedModule: './products',
    });

    const productId = Number(this.route.snapshot.paramMap.get('id'));

    if (productId) {
      this.product = await getProductById(productId);
      this.price = currency.format(this.product?.price);
    }
  }
}
