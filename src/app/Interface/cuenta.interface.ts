
export interface Cuenta {
    id?:           number;
    numeroCuenta: number;
    saldo:        number;
    cliente:      Cliente;
}

export interface Cliente {
    idCliente: number;
    nombre?:    string;
    direccion?: string;
    telefono?:  string;
}
