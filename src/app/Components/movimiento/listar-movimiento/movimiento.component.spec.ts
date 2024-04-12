import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimientoComponent } from './movimiento.component';
import { HttpClientModule } from '@angular/common/http';

describe('MovimientoComponent', () => {
  let component: MovimientoComponent;
  let fixture: ComponentFixture<MovimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule 
      ],
      declarations: [ MovimientoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
