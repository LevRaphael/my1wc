import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyZooComponent } from './my-zoo.component';

describe('MyZooComponent', () => {
  let component: MyZooComponent;
  let fixture: ComponentFixture<MyZooComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyZooComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyZooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
