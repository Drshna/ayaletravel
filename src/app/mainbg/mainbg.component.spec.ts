import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainbgComponent } from './mainbg.component';

describe('MainbgComponent', () => {
  let component: MainbgComponent;
  let fixture: ComponentFixture<MainbgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainbgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainbgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
