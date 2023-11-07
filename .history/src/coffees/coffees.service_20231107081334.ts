import { Injectable } from '@nestjs/common';
import { Coffee } from './entities/coffees.entity';

const byId =
  (coffee: Coffee) =>
  (id: string): boolean =>
    coffee.id === +id;

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

  public findAll() {
    return this.coffees;
  }

  public findOne(id: string) {
    return this.coffees.find(byId);
  }

  public create(coffee: Coffee) {
    this.coffees = [...this.coffees, coffee];
  }

  public delete(id: string) {}
}
