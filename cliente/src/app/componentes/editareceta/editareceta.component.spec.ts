import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarecetaComponent } from './editareceta.component';

describe('EditarecetaComponent', () => {
  let component: EditarecetaComponent;
  let fixture: ComponentFixture<EditarecetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarecetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarecetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
