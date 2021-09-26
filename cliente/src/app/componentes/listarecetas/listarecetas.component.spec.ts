import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarecetasComponent } from './listarecetas.component';

describe('ListarecetasComponent', () => {
  let component: ListarecetasComponent;
  let fixture: ComponentFixture<ListarecetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarecetasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarecetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
