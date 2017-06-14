import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstAngularComponentComponent } from './first-angular-component.component';

describe('FirstAngularComponentComponent', () => {
  let component: FirstAngularComponentComponent;
  let fixture: ComponentFixture<FirstAngularComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstAngularComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstAngularComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
