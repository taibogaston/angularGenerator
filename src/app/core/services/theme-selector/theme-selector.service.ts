import {Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeSelectorService {

  private themeLinkId = 'app-theme';

  changeTheme(themeUrl: string): void {
    let themeLink = document.getElementById(this.themeLinkId) as HTMLLinkElement;

    if (!themeLink) {
      themeLink = document.createElement('link');
      themeLink.id = this.themeLinkId;
      themeLink.rel = 'stylesheet';
      document.head.appendChild(themeLink);
    }

    themeLink.href = themeUrl;
  }
}
