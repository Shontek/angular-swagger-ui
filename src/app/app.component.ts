import { Component } from '@angular/core';
import { SwaggerDocument } from 'swagger-ui/swagger-document/swagger-document';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  document: SwaggerDocument;

  constructor() {
    this.document = {
      swagger: '2.0.0',
      info: {
        title: 'Angular Swagger UI'
      }
    };
  }
}
