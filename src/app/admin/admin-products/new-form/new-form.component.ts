import { MatSelectModule } from '@angular/material/select';
import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../../services/categories.service';
import { ProductsService } from '../../../services/products.service';
import { Router, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { from, observable } from 'rxjs';
import { ColorsService } from '../../../services/colors.service';
import { SizeService } from '../../../services/size.service';
@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.css']
})
export class NewFormComponent implements OnInit {
  categories$;
  colors$;
  selcolors = [];
  size$;
  selected = 'option2';
  cat1;
  secondCategories$;
  gradient$;
  productm: any = {};
  title;
  gradientcolor;
  selectedsizes = [];
  m;
  id;
  constructor(
    private categorysvr: CategoriesService,
    private colorsvr: ColorsService,
    private sizesvr: SizeService,
    private actRout: ActivatedRoute,
    private productsvr: ProductsService,
    private router: Router) {
    this.categories$ = categorysvr.categories();
    this.secondCategories$ = categorysvr.secondCategories();
    this.colors$ = this.colorsvr.getColors();
    this.size$ = this.sizesvr.clothSize();
    this.id = this.actRout.snapshot.paramMap.get('id');
    this.m = this.productsvr.getById(this.id);

    if (this.id) {
      this.productsvr.getById(this.id).pipe(take(1)).subscribe(prod => {
        if (prod) {
          this.productm = prod;
        }
      })
    }


  }

  selectedcolors(selected, colorname) {

    if (selected.checked) {
      
        this.selcolors.push(colorname);
      
    }
    else {
      let index = this.selcolors.indexOf(colorname);
      this.selcolors.splice(index, 1);
    }
    console.log(selected)
    console.log(this.productm)
  }

  selectedSizes(selected, sizename) {

    if (selected.checked) {
      
        this.selectedsizes.push(sizename);
      
    }
    else {
      let index = this.selcolors.indexOf(sizename);
      this.selcolors.splice(index, 1);
    }
    console.log(selected)
    console.log(this.productm)
  }

  



  size(cat) {
    console.log(this.cat1)
    if (cat == "shoes") {
      if(this.cat1=="baby"){
      this.size$ = this.sizesvr.shoesSizeBaby()
      console.log(this.cat1)
      } if(this.cat1=="men"||this.cat1=="women"){
        this.size$ = this.sizesvr.shoesSizeAdult();
        console.log(this.cat1)
        }
        if(this.cat1=="boys"||this.cat1=="girls"){
          this.size$ = this.sizesvr.shoesSizeChild();
          console.log(this.cat1)
          }

    }
    else {
      this.size$ = this.sizesvr.clothSize()
    }
  }

  save(product) {
    if (this.id) {
      this.productsvr.apdate(this.id, this.productm)
    }
    else {
      this.productsvr.create(product);
    }
    this.router.navigateByUrl('/admin/products');
  }
  delete() {

    this.productsvr.delete(this.id);
    this.router.navigateByUrl('/admin/products');

  }


  ngOnInit(): void {

  }
}