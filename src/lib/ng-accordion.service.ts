import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {IAccordionEvent} from './IAccordionEvent';

@Injectable()
export class NgAccordionService {
  private readonly accordionClickSubject: BehaviorSubject<IAccordionEvent> = new BehaviorSubject<IAccordionEvent>(null);
  constructor() { }

  public readonly accordion$ = this.accordionClickSubject.asObservable();


  get accordions(): IAccordionEvent {
    return this.accordionClickSubject.getValue();
  }


  set accordions(val: IAccordionEvent) {
    this.accordionClickSubject.next(val);
  }

  toggleAccordions(val: IAccordionEvent) {
    this.accordions = val;
  }

}
