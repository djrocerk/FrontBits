import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http'; // Asegúrate de importar HttpClientModule
import { AppComponent } from './app.component';
import { PublicidadComponent } from './Components/publicidad/publicidad.component';

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule, // Agrega HttpClientModule a los imports
      ],
      declarations: [
        AppComponent,
        // Agrega el componente app-publicidad a las declaraciones
        PublicidadComponent,
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'angularBanco app is running!'
    );
  });
});
