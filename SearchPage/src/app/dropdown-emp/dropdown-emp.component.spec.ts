import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownEmpComponent } from './dropdown-emp.component';

describe('DropdownEmpComponent', () => {
  let component: DropdownEmpComponent;
  let fixture: ComponentFixture<DropdownEmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownEmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
