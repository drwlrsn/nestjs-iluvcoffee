import { Injectable } from '@nestjs/common';
import { Coffee } from './entities/coffees.entity';

const byId =
  (id: string) =>
  (coffee: Coffee): boolean =>
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
    return this.coffees.find(byId(id));
  }

  public create(coffee: Coffee) {
    this.coffees = [...this.coffees, coffee];
  }

  public update(id: string, update: Omit<Coffee, 'id'>) {
    // const coffee = this.findOne(id);
    // this.delete(id)
  }

  public remove(id: string) {
    const idx = this.coffees.findIndex(byId(id));
    this.coffees = [
      ...this.coffees.slice(0, idx - 1 || 0),
      ...this.coffees.slice(idx),
    ];
  }
}
