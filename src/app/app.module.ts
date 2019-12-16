import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { AppComponent } from './app.component';
import { DropdownComponent } from './dropdown/dropdown/dropdown.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, FontAwesomeModule ],
  declarations: [ AppComponent, DropdownComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 

  constructor(private library: FaIconLibrary) {
    library.addIcons(faAngleDown);
  }

}
