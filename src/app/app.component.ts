import { Component, OnInit } from '@angular/core';
import { ThemeService } from './theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'portfolio';
  constructor(
    private themeService: ThemeService
  ) {}
  ngOnInit() {
  this.themeService.setLightTheme();
  }




  lightTheme() {
      this.themeService.setLightTheme();
  }
  darkTheme() {
      this.themeService.setDarkTheme();
  }
}
