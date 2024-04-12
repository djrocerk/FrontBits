import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { PublicidadComponent } from './publicidad.component';
import { ChuckNorrisService } from 'src/app/Services/chuckNorris/chuck-norris.service';

describe('PublicidadComponent', () => {
  let component: PublicidadComponent;
  let fixture: ComponentFixture<PublicidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ PublicidadComponent ]
    })
    .compileComponents();

     // Creación del componente y fixture
    fixture = TestBed.createComponent(PublicidadComponent);
    component = fixture.componentInstance;
  });

  // Prueba de creación del componente
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be created', () => {
    const service: ChuckNorrisService = TestBed.inject(ChuckNorrisService);
    expect(service).toBeTruthy();
  });

});
