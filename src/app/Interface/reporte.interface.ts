
export interface Reporte {
    id_cliente:   number;
    cuentas:      Cuenta[];
    totaldebito:  number;
    totalcredito: number;
}

export interface Cuenta {
    id:           number;
    numeroCuenta: number;
    saldo:        number;
    cliente:      Cliente;
}

export interface Cliente {
    idCliente: number;
    nombre:    string;
    direccion: string;
    telefono:  string;
}
