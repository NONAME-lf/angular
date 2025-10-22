import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class CarsApiService {
  private _http = inject(HttpClient);

  public getAllCars() {
    return this._http.get('https://api.api-ninjas.com/v1/cars?model=camry', {
      headers: {
        'X-Api-Key': environment.API_KEY,
      },
    });
  }
}
