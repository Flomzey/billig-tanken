import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GasStationDTO} from '../dto/GasStationDTO';

@Injectable({
  providedIn: 'root'
})
export class GasPricesApi {
  apiUrl = "https://api.e-control.at/sprit/1.0/search/gas-stations/by-region"
  http = inject(HttpClient);
  displayCheapest(code: string, fuelType: string, includeClosed: string, type: string): Observable<GasStationDTO[]>{
    const params = new HttpParams()
      .set('code', code)
      .set('fuelType', fuelType)
      .set('includeClosed', includeClosed)
      .set('type', type);
    console.log(this.apiUrl + '?' + params.toString());
    return this.http.get<GasStationDTO[]>(this.apiUrl, {params})
  }
}
