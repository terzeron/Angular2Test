import { Engine, Speedmeter, CarService } from './car.service';

let carServiceFactory = (speedmeter: Speedmeter, engine: Engine) => {
  speedmeter.speed = 100;
  speedmeter.maxSpeed = 500;
  engine.name = '슈퍼 엔진';
  return new CarService(speedmeter, engine);
};
export let CarServiceFactoryProvider = {
  provide: CarService,
  useFactory: carServiceFactory,
  deps: [ Speedmeter, Engine ]
};