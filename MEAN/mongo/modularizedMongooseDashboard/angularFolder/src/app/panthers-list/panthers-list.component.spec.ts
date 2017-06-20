import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanthersListComponent } from './panthers-list.component';

describe('PanthersListComponent', () => {
  let component: PanthersListComponent;
  let fixture: ComponentFixture<PanthersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanthersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanthersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
