import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBuscaComponent } from './card-busca.component';

describe('CardBuscaComponent', () => {
  let component: CardBuscaComponent;
  let fixture: ComponentFixture<CardBuscaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardBuscaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardBuscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
