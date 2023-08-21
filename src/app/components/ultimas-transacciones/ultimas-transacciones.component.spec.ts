import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimasTransaccionesComponent } from './ultimas-transacciones.component';

describe('UltimasTransaccionesComponent', () => {
  let component: UltimasTransaccionesComponent;
  let fixture: ComponentFixture<UltimasTransaccionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UltimasTransaccionesComponent]
    });
    fixture = TestBed.createComponent(UltimasTransaccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
