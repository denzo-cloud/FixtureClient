import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  api = "https://protected-fjord-91518.herokuapp.com/";

  constructor(private http: HttpClient) { }
  
  private headers = new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  });

  getFormUrlEncoded(toConvert) {
    const formBody = [];
    for (const property in toConvert) {
      const encodedKey = encodeURIComponent(property);
      const encodedValue = encodeURIComponent(toConvert[property]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    return formBody.join('&');
  }
  index() {
    return this.http.get(this.api + "api/auth/personas/android", {});
  }
  show(id:number) {
    return this.http.get(this.api + "api/auth/personas/" + id, {});
  }
  post(codigo:string, nombre:string, apellido:string, dni:string, telefono:string, foto:string) {
    return this.http.post(this.api + "api/auth/personas", 
      this.getFormUrlEncoded({
        'codigo': codigo,
        'nombre': nombre,
        'apellido': apellido,
        'dni': dni,
        'telefono': telefono,
        'foto': foto
      }), {'headers': this.headers});
  }
  put(id:number, data:any) {
    return this.http.put(this.api + "api/auth/personas/" + id, 
      this.getFormUrlEncoded(data),
      {
        'headers': this.headers
      }
    );
  }
  delete(id: number) {
    return this.http.delete(this.api + "api/auth/personas/" + id);
  }
}
