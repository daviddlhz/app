import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonasComponent } from './personas/personas.component';
import { PersonasService } from './services/personas.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, PersonasComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [PersonasService],
  bootstrap: [AppComponent],
})
export class AppModule {}
