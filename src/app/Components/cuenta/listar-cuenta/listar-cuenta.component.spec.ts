import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCuentaComponent } from './listar-cuenta.component';
import { HttpClientModule } from '@angular/common/http';

describe('ListarCuentaComponent', () => {
  let component: ListarCuentaComponent;
  let fixture: ComponentFixture<ListarCuentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule 
      ],
      declarations: [ ListarCuentaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
