import { Component, Input, OnInit } from '@angular/core';
import { SwaggerDocument } from './swagger-document';

@Component({
  selector: 'swagger-document',
  templateUrl: './swagger-document.component.html',
  styleUrls: ['./swagger-document.component.css']
})
export class SwaggerDocumentComponent implements OnInit {

  @Input() document: SwaggerDocument;

  constructor() {}

  ngOnInit() {}
}
