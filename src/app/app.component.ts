import {Component} from '@angular/core';
import {Page} from './shared/navigation.pages';
import {Recipe} from './recipes/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  defaultPage: Page = Page.RECIPES;
  selectedPage: Page = this.defaultPage;

  pages = Page;

  onNavigationSelected(navigationData: { page: Page }) {
    this.selectedPage = navigationData.page;
  }

  pageIs(expectedPage: Page) {
    return expectedPage === this.selectedPage;
  }
}
