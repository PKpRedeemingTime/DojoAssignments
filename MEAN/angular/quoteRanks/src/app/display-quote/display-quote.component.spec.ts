import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayQuoteComponent } from './display-quote.component';

describe('DisplayQuoteComponent', () => {
  let component: DisplayQuoteComponent;
  let fixture: ComponentFixture<DisplayQuoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayQuoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
