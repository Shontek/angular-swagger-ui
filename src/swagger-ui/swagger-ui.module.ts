import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwaggerDocumentComponent } from './swagger-document/swagger-document.component';
import { SwaggerInfoComponent } from './swagger-info/swagger-info.component';

@NgModule({
  id: 'swagger-ui',
  imports: [
    CommonModule
  ],
  exports: [
    SwaggerDocumentComponent
  ],
  declarations: [
    SwaggerDocumentComponent,
    SwaggerInfoComponent
  ],
})
export class SwaggerUiModule { }
