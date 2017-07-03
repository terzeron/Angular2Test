import { Component } from '@angular/core';
import { CarService } from './car.service';
import { CarServiceFactoryProvider } from './car.service.provider';

@Component({
  selector: 'app-factory-provider',
  template: `
  <div>엔진이름 : {{carService.engine.name}}</div>
  <div>현재속도 : {{carService.speedmeter.speed}} km/h</div>
  <div>최대속도 : {{carService.speedmeter.maxSpeed}} km/h</div>`,
  providers: [ CarServiceFactoryProvider ]
})
export class FactoryProviderComponent {
  constructor(public carService: CarService) { }
}