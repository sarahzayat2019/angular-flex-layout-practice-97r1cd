import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  imports: [BrowserModule, FormsModule, FlexLayoutModule],
  declarations: [AppComponent, FooterComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
