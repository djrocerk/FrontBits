import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule
import { ReporteComponent } from './reporte.component';
import { ClienteSService } from 'src/app/Services/cliente/cliente-s.service';
import { ReporteService } from 'src/app/Services/reporte/reporte.service';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Cliente } from 'src/app/Interface/cliente.interface';
import { of } from 'rxjs';
import { Reporte } from 'src/app/Interface/reporte.interface';

describe('ReporteComponent', () => {
  let fixture: ComponentFixture<ReporteComponent>;
  let component: ReporteComponent;
  let clienteService: jasmine.SpyObj<ClienteSService>;
  let reporteService: jasmine.SpyObj<ReporteService>;

  beforeEach(() => {
    // Creamos objetos espía para los servicios
    clienteService = jasmine.createSpyObj('ClienteSService', ['listarCliente']);
    reporteService = jasmine.createSpyObj('ReporteService', ['generarReporte']);

    TestBed.configureTestingModule({
      declarations: [ ReporteComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule // Asegúrate de importar HttpClientModule aquí
      ],
      providers: [
        FormBuilder,
        // Proporcionamos los objetos espía como valores para los servicios
        { provide: ClienteSService, useValue: clienteService },
        { provide: ReporteService, useValue: reporteService }
      ]
    });

    // Creamos el componente y su fixture antes de cada prueba
    fixture = TestBed.createComponent(ReporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Las pruebas van aquí...
});
