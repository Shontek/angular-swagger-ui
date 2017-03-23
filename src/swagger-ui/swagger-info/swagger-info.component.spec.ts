import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwaggerInfoComponent } from './swagger-info.component';

describe('SwaggerInfoComponent', () => {
  let component: SwaggerInfoComponent;
  let fixture: ComponentFixture<SwaggerInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwaggerInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwaggerInfoComponent);
    component = fixture.componentInstance;
    component.info = {
      title: 'Angular Swagger UI'
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display title', () => {
    expect(fixture.debugElement.nativeElement.querySelector('h1').textContent).toEqual(component.info.title);
  });
});
