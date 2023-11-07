import { Injectable } from '@nestjs/common';
import { Coffee } from './entities/coffees.entity';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Shipwreck Roasat',
      brand: 'Buddy Brew',
      flavours: ['chocolate', 'vanilla'],
    },
  ];
}
