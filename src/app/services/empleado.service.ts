import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from "rxjs";
import { Global } from './global'
@Injectable()

export class EmpleadoService {

    public url: string;
    constructor(private _http: HttpClient) {
        this.url = Global.url;
    }
 
    getEmpleados(): Observable<any> {
        return this._http.get(this.url + 'empleados');
    }
    getEmpleado(Usuario_id): Observable<any> {
        return this._http.get(this.url + 'empleado/' + Usuario_id);
    }
    createEmpleado(_Empleado): Observable<any> {
    
        let params = JSON.stringify({
            nombre: _Empleado.nombre,
            primerApellido: _Empleado.primerApellido,
            segundoApellido: _Empleado.segundoApellido,
            fechaNacimiento: _Empleado.fechaNacimiento,
            correoElectronico: _Empleado.correoElectronico,
            puesto: _Empleado.puesto,
            skill: _Empleado.skill
        });
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.post(this.url + 'empleado', params, { headers: headers });
    }
}