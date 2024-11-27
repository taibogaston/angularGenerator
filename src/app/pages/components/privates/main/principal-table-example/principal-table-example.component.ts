import { Component } from '@angular/core';
import {Table, TableModule} from 'primeng/table';
import {IconFieldModule} from 'primeng/iconfield';
import {InputIconModule} from 'primeng/inputicon';
import {MultiSelectModule} from 'primeng/multiselect';
import {DropdownModule} from 'primeng/dropdown';
import {TagModule} from 'primeng/tag';
import {NgClass} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-principal-table-example',
  standalone: true,
  imports: [
    TableModule,
    IconFieldModule,
    InputIconModule,
    MultiSelectModule,
    DropdownModule,
    TagModule,
    NgClass,
    FormsModule
  ],
  templateUrl: './principal-table-example.component.html',
  styleUrl: './principal-table-example.component.scss'
})
export class PrincipalTableExampleComponent {
  data : any =  [
{
  id: '1016',
    code: 'k8l6j58jl',
  name: 'Lime Band',
  description: 'Product Description',
  image: 'lime-band.jpg',
  price: 79,
  category: 'Fitness',
  quantity: 12,
  inventoryStatus: 'INSTOCK',
  rating: 3
},
{
  id: '1017',
    code: 'v435nn85n',
  name: 'Mini Speakers',
  description: 'Product Description',
  image: 'mini-speakers.jpg',
  price: 85,
  category: 'Clothing',
  quantity: 42,
  inventoryStatus: 'INSTOCK',
  rating: 4
},
{
  id: '1018',
    code: '09zx9c0zc',
  name: 'Painted Phone Case',
  description: 'Product Description',
  image: 'painted-phone-case.jpg',
  price: 56,
  category: 'Accessories',
  quantity: 41,
  inventoryStatus: 'INSTOCK',
  rating: 5
},
{
  id: '1019',
    code: 'mnb5mb2m5',
  name: 'Pink Band',
  description: 'Product Description',
  image: 'pink-band.jpg',
  price: 79,
  category: 'Fitness',
  quantity: 63,
  inventoryStatus: 'INSTOCK',
  rating: 4
},
{
  id: '1020',
    code: 'r23fwf2w3',
  name: 'Pink Purse',
  description: 'Product Description',
  image: 'pink-purse.jpg',
  price: 110,
  category: 'Accessories',
  quantity: 0,
  inventoryStatus: 'OUTOFSTOCK',
  rating: 4
},
];
  products!: any[];
  constructor() {}

  ngOnInit() {
      this.products = this.data;
  }

}

