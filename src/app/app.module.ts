import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faAngleDown, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { AppComponent } from './app.component';
import { DropdownComponent } from './dropdown/dropdown/dropdown.component';
import { TabsComponent } from './tabs/tabs/tabs.component';
import { PersonComponent } from './person/person.component';
import { ImgBigDirective, ImgMediumDirective, ImgSmallDirective } from './person/img-big.directive';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, FontAwesomeModule ],
  declarations: [ AppComponent, DropdownComponent, TabsComponent, PersonComponent, ImgBigDirective, ImgMediumDirective, ImgSmallDirective, BreadcrumbComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 

  constructor(private library: FaIconLibrary) {
    library.addIcons(faAngleDown, faAngleLeft, faAngleRight);
  }

}
