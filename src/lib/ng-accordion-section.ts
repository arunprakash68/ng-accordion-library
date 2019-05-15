import {Component, ElementRef, Input, OnInit, Renderer2} from '@angular/core';
import {NgAccordionService} from './ng-accordion.service';

@Component({
  selector: 'lib-ng-accordion-section',
  template: `
    <div class="accordion-section">
      <div class="accordion-section-header">
        <a class="section-header-link" href [ngClass]="{'active-link': isAccordionOpen}" (click)="toggleAccordion($event)">{{header}}
          <span *ngIf="!isAccordionOpen">&#43;</span><span *ngIf="isAccordionOpen">&#45;</span></a>
      </div>
      <div class="accordion-section-body" *ngIf="isAccordionOpen">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [`.accordion-section {
    min-width: 100%;
    color: #000000;
    border: 0.05em solid #000000;
  }

  .accordion-section-header {
    min-width: inherit;
    max-width: inherit;
    border-bottom: 0.1em solid #000000;
    display: inline-block;
    color: #ffffff;
    background-color: #2e84bd;
    padding: 0.5em 0;
    font-size: 1.25em;
  }

  .section-header-link {
    margin-left: 1em;
    color: #ffffff;
    text-decoration: none;
  }

  .section-header-link:hover {
    color: #000000;
  }

  .active-link {
    color: #000000;
  }

  .accordion-section-body {
    padding: 1em;
    background-color: #ffffff;
    font-size: 1em;
  }`],
  providers: []
})
export class NgAccordionSectionComponent implements OnInit {
  @Input()
  header: string;
  @Input()
  active: boolean;

  constructor(private accordionService: NgAccordionService, private renderer: Renderer2) {
  }
  isAccordionOpen: boolean;
  index: number;
  ngOnInit() {
    /**
     * set is accordionOpen to open/close based on initial active property
     * Default is closes
     */
    if (this.active) {
      this.isAccordionOpen = true;
    } else {
      this.isAccordionOpen = false;
    }
  }

  /**
   *
   * @param event this function toggles Accordion to show or hide elements
   */
  toggleAccordion(event: Event) {
    event.preventDefault();
    if (this.isAccordionOpen) {
      this.setAccordionClose();
    } else {
      this.setAccordionOpen();
    }
  }

  /**
   * this function sets accordion to open
   */
  setAccordionOpen() {
    this.isAccordionOpen = true;
    this.accordionService.toggleAccordions({
      index: this.index,
      action: 'open'
    });
  }

  /**
   * this function sets accordion to close
   */
  setAccordionClose() {
    this.isAccordionOpen = false;
    this.accordionService.toggleAccordions({
      index: this.index,
      action: 'close'
    });
  }

}
