import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevarecetaComponent } from './nuevareceta.component';

describe('NuevarecetaComponent', () => {
  let component: NuevarecetaComponent;
  let fixture: ComponentFixture<NuevarecetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevarecetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevarecetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
