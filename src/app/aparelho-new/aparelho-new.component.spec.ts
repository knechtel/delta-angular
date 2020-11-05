import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AparelhoNewComponent } from './aparelho-new.component';

describe('AparelhoNewComponent', () => {
  let component: AparelhoNewComponent;
  let fixture: ComponentFixture<AparelhoNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AparelhoNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AparelhoNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
