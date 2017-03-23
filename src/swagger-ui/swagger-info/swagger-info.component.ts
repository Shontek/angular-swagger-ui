import { Component, Input, OnInit } from '@angular/core';
import { SwaggerInfo } from './swagger-info';

@Component({
  selector: 'swagger-info',
  templateUrl: './swagger-info.component.html',
  styleUrls: ['./swagger-info.component.css']
})
export class SwaggerInfoComponent implements OnInit {

  @Input() info: SwaggerInfo;

  constructor() {}

  ngOnInit() {}
}
