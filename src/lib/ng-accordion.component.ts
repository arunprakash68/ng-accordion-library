import {AfterContentChecked, Component, ContentChildren, ElementRef, Input, OnInit, QueryList, ViewContainerRef} from '@angular/core';
import {NgAccordionSectionComponent} from './ng-accordion-section';
import {NgAccordionService} from './ng-accordion.service';
import {IAccordionEvent} from './IAccordionEvent';

@Component({
  selector: 'lib-ng-accordion',
  template: `
    <div class="accordion-body">
      <ng-content></ng-content>
    </div>
  `,
  styles: [`.accordion-body {
    border: 1px solid #000000;
    }`],
  providers: [NgAccordionService]
})
export class NgAccordionComponent implements OnInit, AfterContentChecked {
  @Input()
  openMultiple: boolean;
  @ContentChildren(NgAccordionSectionComponent) accordions: QueryList<NgAccordionSectionComponent>;
  protected accrodionGroups: NgAccordionSectionComponent[];
  constructor(private accordionService: NgAccordionService) {
  }

  ngOnInit() {
    this.accordionService.accordion$.subscribe((event: IAccordionEvent) => {
      this.toggleAccordions(event);
    });
  }

  ngAfterContentChecked(): void {
    this.setIndexesForAccordions();
  }

  /**
   *
   * @param event
   * Toggles all other accordions to close if open multiple is not defined or set to false
   */
  toggleAccordions(event: IAccordionEvent) {
    if (event) {
      if (this.openMultiple) {
        return;
      }
      this.accordions.forEach((acc: NgAccordionSectionComponent, index: number) => {
        if (event.action === 'open' && event.index !== index) {
          acc.isAccordionOpen = false;
        }
      });
    }
  }

  /**
   * Sets indexes to child components for ease of using them
   */
  setIndexesForAccordions() {
    this.accordions.forEach((item: NgAccordionSectionComponent, index) => {
      item.index = index;
    });
  }

}
