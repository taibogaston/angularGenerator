import {Component, OnInit} from '@angular/core';
import {ThemeSelectorService} from '../../../core/services/theme-selector.service';
import {CascadeSelectModule} from 'primeng/cascadeselect';

@Component({
  selector: 'app-theme-selector',
  standalone: true,
  imports: [
    CascadeSelectModule
  ],
  templateUrl: './theme-selector.component.html',
  styleUrl: './theme-selector.component.scss'
})
export class ThemeSelectorComponent implements OnInit{

  themes: any[] | undefined;
  constructor(private themeSelector: ThemeSelectorService) {
  }

  ngOnInit() {
    this.themes = [
      {
        name: 'Arya',
        code: 'default',
        states: [
          { cname: 'Arya Blue', code: 'arya-blue' },
          { cname: 'Arya Green', code: 'arya-green' },
          { cname: 'Arya Orange', code: 'arya-orange' },
          { cname: 'Arya Purple', code: 'arya-purple' },
        ],
      },
      {
        name: 'Boostrap',
        code: 'default',
        states: [
          { cname: 'Boostrap Dark Blue', code: 'bootstrap4-dark-blue' },
          { cname: 'Boostrap Dark Purple', code: 'bootstrap4-dark-purple' },
          { cname: 'Boostrap Light Blue', code: 'bootstrap4-light-blue' },
          { cname: 'Boostrap Light Purple', code: 'bootstrap4-light-purple' },
        ],
      },
      {
        name: 'Lara',
        code: 'default',
        states: [
          { cname: 'Lara Dark Blue', code: 'lara-dark-blue' },
          { cname: 'Lara Dark Indigo', code: 'lara-dark-indigo' },
          { cname: 'Lara Dark Purple', code: 'lara-dark-purple' },
          { cname: 'Lara Dark Teal', code: 'lara-dark-teal' },
          { cname: 'Lara Light Blue', code: 'lara-light-blue' },
          { cname: 'Lara Light Indigo', code: 'lara-light-indigo' },
          { cname: 'Lara Light Purple', code: 'lara-light-purple' },
          { cname: 'Lara Light Teal', code: 'lara-light-teal' },
        ],
      },
      {
        name: 'Material Design',
        code: 'default',
        states: [
          { cname: 'MD Dark Deep Purple', code: 'md-dark-deeppurple' },
          { cname: 'MD Dark Indigo', code: 'md-dark-indigo' },
          { cname: 'MD Light Deep Purple', code: 'md-light-deeppurple' },
          { cname: 'MD Light Indigo', code: 'md-light-indigo' },
        ],
      },
      {
        name: 'Material Design Compact',
        code: 'default',
        states: [
          { cname: 'MDC Dark Deep Purple', code: 'mdc-dark-deeppurple' },
          { cname: 'MDC Dark Indigo', code: 'mdc-dark-indigo' },
          { cname: 'MDC Light Deep Purple', code: 'mdc-light-deeppurple' },
          { cname: 'MDC Light Indigo', code: 'mdc-light-indigo' },
        ],
      },
      {
        name: 'Saga',
        code: 'default',
        states: [
          { cname: 'Saga Blue', code: 'saga-blue' },
          { cname: 'Saga Green', code: 'saga-green' },
          { cname: 'Saga Orange', code: 'saga-orange' },
          { cname: 'Saga Purple', code: 'saga-purple' },
        ],
      },
      {
        name: 'Tailwind',
        code: 'default',
        states: [
          { cname: 'Tailwind Light', code: 'tailwind-light' },
        ],
      },
      {
        name: 'Vela',
        code: 'default',
        states: [
          { cname: 'Vela Blue', code: 'vela-blue' },
          { cname: 'Vela Green', code: 'vela-green' },
          { cname: 'Vela Orange', code: 'vela-orange' },
          { cname: 'Vela Purple', code: 'vela-purple' },
        ],
      },
    ];

  }

  changeTheme(event: any): void {
    this.themeSelector.selectTheme(event);
  }


}
