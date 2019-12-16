import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchOwnComponent } from './search-own.component';

describe('SearchOwnComponent', () => {
  let component: SearchOwnComponent;
  let fixture: ComponentFixture<SearchOwnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchOwnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchOwnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
