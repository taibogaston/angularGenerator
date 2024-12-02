import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ThemeSelectorService} from './core/services/theme-selector.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'AngularDefaultGenerator';

  constructor(private themeSelector: ThemeSelectorService) {}

  ngOnInit() {
    if(localStorage.getItem('selectedTheme')){
      this.themeSelector.selectTheme(localStorage.getItem('selectedTheme'));
    }
  }

}
