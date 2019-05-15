import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAccordionComponent } from './ng-accordion.component';

describe('NgAccordionComponent', () => {
  let component: NgAccordionComponent;
  let fixture: ComponentFixture<NgAccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgAccordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
