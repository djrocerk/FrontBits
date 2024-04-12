import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { ActualizarClienteComponent } from './actualizar-cliente.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

describe('ActualizarClienteComponent', () => {
  let component: ActualizarClienteComponent;
  let fixture: ComponentFixture<ActualizarClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        ReactiveFormsModule
      ],
      declarations: [ ActualizarClienteComponent ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => '1' // Valor simulado para el ID del cliente
              }
            }
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ActualizarClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
