import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarClienteComponent } from './listar-cliente.component';
import { HttpClientModule } from '@angular/common/http';

describe('ListarClienteComponent', () => {
  let component: ListarClienteComponent;
  let fixture: ComponentFixture<ListarClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      declarations: [ ListarClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
