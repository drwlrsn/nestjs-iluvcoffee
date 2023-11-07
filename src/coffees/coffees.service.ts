import { Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entities/coffees.entity';

const byId =
  (id: string) =>
  (coffee: Coffee): boolean =>
    coffee.id === +id;

@Injectable()
export class CoffeesService {
  private nextId = 2;
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Shipwreck Roast',
      brand: 'Buddy Brew',
      flavours: ['chocolate', 'vanilla'],
    },
  ];

  private incrId() {
    this.nextId += 1;
  }

  private append(coffee: Coffee) {
    this.coffees = [...this.coffees, coffee];
  }

  public findAll() {
    return this.coffees;
  }

  public findOne(id: string) {
    const coffee = this.coffees.find(byId(id));
    if (!coffee) {
      throw new NotFoundException(`Coffee #${id} not found`);
    }
    return coffee;
  }

  public create(coffeeCreate: Omit<Coffee, 'id'>, id = this.nextId.toString()) {
    const coffee = { id: +id, ...coffeeCreate };
    this.append(coffee);
    this.incrId();
    return coffee;
  }

  public update(id: string, update: Partial<Omit<Coffee, 'id'>>) {
    if (!id) {
      throw new Error('Expected id');
    }
    const coffee = this.findOne(id);
    this.remove(id);
    const updatedCoffee = { ...coffee, ...update };
    this.append(updatedCoffee);
    return updatedCoffee;
  }

  public remove(id: string) {
    const idx = this.coffees.findIndex(byId(id));
    this.coffees = [
      ...this.coffees.slice(0, idx || 0),
      ...this.coffees.slice(idx + 1),
    ];
  }
}
