import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AparelhoDetailComponent } from './aparelho-detail.component';

describe('AparelhoDetailComponent', () => {
  let component: AparelhoDetailComponent;
  let fixture: ComponentFixture<AparelhoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AparelhoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AparelhoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
