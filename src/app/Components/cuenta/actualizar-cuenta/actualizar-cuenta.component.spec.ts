import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { ActualizarCuentaComponent } from './actualizar-cuenta.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

describe('ActualizarCuentaComponent', () => {
  let component: ActualizarCuentaComponent;
  let fixture: ComponentFixture<ActualizarCuentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        ReactiveFormsModule
      ],
      declarations: [ ActualizarCuentaComponent ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => '1' // Valor simulado para el ID de la cuenta
              }
            }
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ActualizarCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
