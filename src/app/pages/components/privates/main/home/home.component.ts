import {Component} from '@angular/core';
import {CardModule} from 'primeng/card';
import {PrincipalTableExampleComponent} from '../principal-table-example/principal-table-example.component';

@Component({
  selector: 'app-home',
  standalone: true,

  imports: [
    CardModule,
    PrincipalTableExampleComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
