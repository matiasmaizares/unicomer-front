import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProximanteComponent } from './proximante.component';

describe('ProximanteComponent', () => {
  let component: ProximanteComponent;
  let fixture: ComponentFixture<ProximanteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProximanteComponent]
    });
    fixture = TestBed.createComponent(ProximanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
