import {inject, Injectable} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeSelectorService {
  #document = inject(DOCUMENT);
  theme: string = 'lara-light-indigo';
  constructor() { }

  selectTheme(event: any) {
    this.theme = (localStorage.getItem('selectedTheme')) ? localStorage.getItem('selectedTheme')! :'lara-light-indigo';

    if(event.value){
       this.theme = event.value.code;
    }
    const linkElement = this.#document.getElementById('theme-css') as HTMLLinkElement;

      linkElement.href = `assets/styles/theme/${this.theme}/theme.css`;

      localStorage.setItem('selectedTheme', this.theme);
  }
}
