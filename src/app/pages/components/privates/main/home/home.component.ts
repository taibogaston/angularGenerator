import {Component} from '@angular/core';
import {CardModule} from 'primeng/card';
import {PrincipalTableExampleComponent} from '../principal-table-example/principal-table-example.component';
import {CalendarModule} from 'primeng/calendar';
import {FormsModule} from '@angular/forms';
import {InputSwitchModule} from 'primeng/inputswitch';
import {CascadeSelectModule} from 'primeng/cascadeselect';
import {ThemeSelectorComponent} from '../../../../shared/theme-selector/theme-selector.component';

@Component({
  selector: 'app-home',
  standalone: true,

  imports: [
    CardModule,
    PrincipalTableExampleComponent,
    CalendarModule,
    FormsModule,
    InputSwitchModule,
    CascadeSelectModule,
    ThemeSelectorComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent{
  date: Date[] | undefined;
}
