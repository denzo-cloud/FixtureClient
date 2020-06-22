import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OlimpiadaService{
  api = "https://protected-fjord-91518.herokuapp.com/";

  constructor(private http: HttpClient) {

  }
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
    return this.http.get(this.api + "api/auth/olimpiadas", {});
  }
  show(id:number) {
    return this.http.get(this.api + "api/auth/olimpiadas/"+ id, {});
  }
   post(nombreo:string,descripciono:string,fecha_inicio:Date, fecha_fin_inscripcion:Date , fecha_fin:Date  ) {
    return this.http.post(this.api + "api/auth/olimpiadas", 
      this.getFormUrlEncoded({
        'nombre': nombreo,
        'descripcion': descripciono,
        'fecha_inicio': fecha_inicio,
        'fecha_fin_inscripcion': fecha_fin_inscripcion,
        'fecha_fin': fecha_fin
      }), {'headers': this.headers});
  }

} 