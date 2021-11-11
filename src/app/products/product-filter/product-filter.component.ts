import { Component, Input, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {
  @Input('category') category;
  @Input('secondCategoty') secondCategory;

  categories$;
  secondCategories$;
  constructor(private categorysrv:CategoriesService) {
this.categories$=this.categorysrv.categories();
this.secondCategories$=this.categorysrv.secondCategories();


   }

  ngOnInit(): void {
  }

}
