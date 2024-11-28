import {Component} from '@angular/core';
import {CardModule} from 'primeng/card';
import {PrincipalTableExampleComponent} from '../principal-table-example/principal-table-example.component';
import {CalendarModule} from 'primeng/calendar';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,

  imports: [
    CardModule,
    PrincipalTableExampleComponent,
    CalendarModule,
    FormsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  date: Date[] | undefined;
}
