import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingOsComponent } from './listing-os.component';

describe('ListingOsComponent', () => {
  let component: ListingOsComponent;
  let fixture: ComponentFixture<ListingOsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingOsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingOsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
