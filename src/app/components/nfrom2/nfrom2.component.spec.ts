import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Nfrom2Component } from './nfrom2.component';

describe('Nfrom2Component', () => {
  let component: Nfrom2Component;
  let fixture: ComponentFixture<Nfrom2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nfrom2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nfrom2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
