import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NformComponent } from './nform.component';

describe('NformComponent', () => {
  let component: NformComponent;
  let fixture: ComponentFixture<NformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
