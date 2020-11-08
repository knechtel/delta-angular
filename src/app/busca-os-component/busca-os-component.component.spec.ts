import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaOsComponentComponent } from './busca-os-component.component';

describe('BuscaOsComponentComponent', () => {
  let component: BuscaOsComponentComponent;
  let fixture: ComponentFixture<BuscaOsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscaOsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscaOsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
