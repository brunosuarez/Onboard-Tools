import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosSellerComponent } from './dados-seller.component';

describe('DadosSellerComponent', () => {
  let component: DadosSellerComponent;
  let fixture: ComponentFixture<DadosSellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadosSellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
