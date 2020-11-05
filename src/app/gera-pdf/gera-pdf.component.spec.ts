import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeraPdfComponent } from './gera-pdf.component';

describe('GeraPdfComponent', () => {
  let component: GeraPdfComponent;
  let fixture: ComponentFixture<GeraPdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeraPdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeraPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
