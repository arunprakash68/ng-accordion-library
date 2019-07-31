import { TestBed } from '@angular/core/testing';

import { NgAccordionService } from './ng-accordion.service';

xdescribe('NgAccordionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  fit('should be created', () => {
    const service: NgAccordionService = TestBed.get(NgAccordionService);
    expect(service).toBeTruthy();
  });
});
