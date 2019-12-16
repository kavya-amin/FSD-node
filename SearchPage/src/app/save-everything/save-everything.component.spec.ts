import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveEverythingComponent } from './save-everything.component';

describe('SaveEverythingComponent', () => {
  let component: SaveEverythingComponent;
  let fixture: ComponentFixture<SaveEverythingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveEverythingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveEverythingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
