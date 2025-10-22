import { Component, signal, inject } from '@angular/core';
import { CarsApiService } from 'src/app/services/cars-api.service';

@Component({
  selector: 'morent-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  public car = signal<any>({});
  private _carsApi = inject(CarsApiService);
  constructor() {
    this._carsApi.getAllCars().subscribe((cars: any) => {
      console.log(cars[0]);
      this.car.set(cars[0]);
    });
  }
}
