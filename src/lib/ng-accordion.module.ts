import { NgModule } from '@angular/core';
import { NgAccordionComponent } from './ng-accordion.component';
import {NgAccordionSectionComponent} from './ng-accordion-section';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [NgAccordionComponent, NgAccordionSectionComponent],
  imports: [
    CommonModule
  ],
  exports: [NgAccordionComponent, NgAccordionSectionComponent]
})
export class NgAccordionModule { }
