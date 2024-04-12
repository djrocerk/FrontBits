
export interface Movimiento {
    id_movimineto?:  number;
    fecha:          string;
    valor:          number;
    cuenta:         Cuenta;
    tipoMovimiento: TipoMovimiento;
}

export interface Cuenta {
    id:           number;
    numeroCuenta: number;
    saldo?:        number;
    cliente?:      Cliente;
}

export interface Cliente {
    idCliente?: number;
    nombre?:    string;
    direccion?: string;
    telefono?:  string;
}

export interface TipoMovimiento {
    idTipoMovimiento: number;
    codigo?:           string;
    nombre?:           string;
}
