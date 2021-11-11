import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, Subject } from 'rxjs';
import { DataTablesModule } from 'angular-datatables';


@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnDestroy {
  products: any[];
  filtered: any[];
  sub: Subscription;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  id;
  constructor(private pruductsvr: ProductsService,
    private actRout: ActivatedRoute,
    private router:Router
  ) {
    this.sub = this.pruductsvr.get().subscribe(prod => {

      this.filtered = this.products = prod;
      // Calling the DT trigger to manually render the table
      this.dtTrigger.next();
    });

    this.id = this.actRout.snapshot.paramMap.get('id');


  }
  filters(query: string) {
    console.log(query);

    if (query) {
      
      this.filtered =
      this.products.filter(p => 
      p.payload.val().
      title.toLowerCase().
      includes(query.toLocaleLowerCase()) 
        );
    } else {
      this.filtered = this.products;


    }
  }
  delete() {

    if (confirm('mmmm')) {
      console.log('confirmed');
    }

    this.pruductsvr.delete(this.id);
    console.log('deleted');



  }
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
    this.dtTrigger.unsubscribe();

  }
}
