import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormImpComponent } from './form-imp.component';

describe('FormImpComponent', () => {
  let component: FormImpComponent;
  let fixture: ComponentFixture<FormImpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormImpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormImpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
