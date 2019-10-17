import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }


  public getWeatherByService(longitude,latitude,services): Observable<any> {
    const headers = new HttpHeaders({
      "Content-Type": "application/json"
    });

    let params = new HttpParams();

    params = params.append('longitude', longitude);
    params = params.append('latitude', latitude);
    params = params.append('services', services);

    return this.http.get<any>(
      environment.weatherUrl + "weathers",
      { headers, params }
    );
  }

}
