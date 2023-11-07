import { Injectable } from '@nestjs/common';
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
      name: 'Shipwreck Roasat',
      brand: 'Buddy Brew',
      flavours: ['chocolate', 'vanilla'],
    },
  ];

  private incrId() {
    this.nextId += 1;
  }

  public findAll() {
    return this.coffees;
  }

  public findOne(id: string) {
    return this.coffees.find(byId(id));
  }

  public create(coffee: Omit<Coffee, 'id'>, id = this.nextId.toString()) {
    this.coffees = [...this.coffees, { id: +id, ...coffee }];
  }

  public update(id: string, update: Partial<Omit<Coffee, 'id'>>) {
    const coffee = this.findOne(id);
    this.remove(id);
    this.create({ ...coffee, ...update }, id);
  }

  public remove(id: string) {
    const idx = this.coffees.findIndex(byId(id));
    this.coffees = [
      ...this.coffees.slice(0, idx - 1 || 0),
      ...this.coffees.slice(idx),
    ];
  }
}
