import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { SwaggerDocument } from './swagger-document';
import { SwaggerDocumentComponent } from './swagger-document.component';
import { SwaggerInfoComponent } from '../swagger-info/swagger-info.component';

describe('SwaggerDocumentComponent', () => {
  let component: SwaggerDocumentComponent;
  let fixture: ComponentFixture<SwaggerDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SwaggerDocumentComponent,
        SwaggerInfoComponent
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwaggerDocumentComponent);
    component = fixture.componentInstance;
    component.document = {
      swagger: '2.0.0',
      info: {
        title: 'Angular Swagger UI'
      }
    };
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
