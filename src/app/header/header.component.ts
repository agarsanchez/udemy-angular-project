import {Component, EventEmitter, Output} from '@angular/core';
import {Page} from '../shared/navigation.pages';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html'
})

export class HeaderComponent {

  @Output() navigationSelected = new EventEmitter<{ page: Page }>();

  pages = Page;

  navigateTo(page: Page) {
    this.navigationSelected.emit({page: page});
  }
}
