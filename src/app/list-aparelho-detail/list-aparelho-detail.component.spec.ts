import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAparelhoDetailComponent } from './list-aparelho-detail.component';

describe('ListAparelhoDetailComponent', () => {
  let component: ListAparelhoDetailComponent;
  let fixture: ComponentFixture<ListAparelhoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAparelhoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAparelhoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
