import {Component, inject} from '@angular/core';
import {CardModule} from 'primeng/card';
import {PrincipalTableExampleComponent} from '../principal-table-example/principal-table-example.component';
import {CalendarModule} from 'primeng/calendar';
import {FormsModule} from '@angular/forms';
import {DOCUMENT} from '@angular/common';
import {InputSwitchModule} from 'primeng/inputswitch';

@Component({
  selector: 'app-home',
  standalone: true,

  imports: [
    CardModule,
    PrincipalTableExampleComponent,
    CalendarModule,
    FormsModule,
    InputSwitchModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  date: Date[] | undefined;
  #document = inject(DOCUMENT);
  isDarkMode = false;

  toggleLightDark() {
    const linkElement = this.#document.getElementById('theme-css') as HTMLLinkElement;
    if (linkElement.href.includes('light')) {
      linkElement.href = 'assets/styles/theme/lara-dark-indigo/theme.css';
      this.isDarkMode = true;
    } else {
      linkElement.href = 'assets/styles/theme/lara-light-indigo/theme.css';
      this.isDarkMode = false;
    }
  }


}
