import { Component, inject, input, output, signal } from '@angular/core';
import { Input } from '../input/input';
import { environment } from '@env/environment';
import { CarsApiService } from 'src/app/services/cars-api.service';

@Component({
  selector: 'morent-header',
  imports: [Input],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  public headerTitle = input<string>('acba bank');
  public userClick = output<void>();
  public isProduction = environment.production;
  public car = signal<string>('');
  private _carsApi = inject(CarsApiService);
  constructor() {
    this._carsApi.getAllCars().subscribe((cars: any) => {
      // console.log(cars);
      this.car.set(cars[0].model);
    });
  }
}
