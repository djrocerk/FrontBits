import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { ActualizarMovimientoComponent } from './actualizar-movimiento.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

describe('ActualizarMovimientoComponent', () => {
  let component: ActualizarMovimientoComponent;
  let fixture: ComponentFixture<ActualizarMovimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        ReactiveFormsModule
      ],
      declarations: [ ActualizarMovimientoComponent ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => '1' // Valor simulado para el ID del movimiento
              }
            }
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ActualizarMovimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
