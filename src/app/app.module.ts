import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SwaggerUiModule } from 'swagger-ui/swagger-ui.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SwaggerUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
