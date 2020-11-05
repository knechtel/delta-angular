import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOsDetailComponent } from './list-os-detail.component';

describe('ListOsDetailComponent', () => {
  let component: ListOsDetailComponent;
  let fixture: ComponentFixture<ListOsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
