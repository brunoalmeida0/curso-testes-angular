import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogComentarioComponent } from './dialog-comentario.component';

describe('', () => {
  let component: DialogComentarioComponent;
  let fixture: ComponentFixture<DialogComentarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogComentarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogComentarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
