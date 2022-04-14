/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import { Injectable } from '@nestjs/common';

import { Entity } from 'src/share/abstract/entity';
import { Repository } from 'src/share/abstract/repository';

@Injectable()
export class InMemoryRepository<
  TEntity extends Entity,
  TArgs = never
> extends Repository<TEntity, TArgs> {
  protected readonly inmemoryData: TEntity[];

  constructor(
    private readonly dataMock?: TEntity[],
  ) {
    super();
    this.inmemoryData = this.dataMock || [];
  }

  public async create(data: TEntity): Promise<TEntity> {
    if (this.dataMock) {
      throw new Error('Se possivel, não use o create para criar novos registros, caso tenha dados mockados,');
    }
    data.id = this.inmemoryData.length > 0 ? this.inmemoryData.slice(-1)[0].id + 1 : 1;
    data.createdAt = new Date();
    data.updatedAt = new Date();
    const count = this.inmemoryData.push(data);

    return this.inmemoryData[count - 1];
  }

  public async createMany(data: TEntity[], args: TArgs): Promise<TArgs> {
    if (this.dataMock) {
      throw new Error('Se possivel, não use o create para criar novos registros, caso tenha dados mockados,');
    }

    data.forEach((item, index) => {
      item.id = index + 1;
      setTimeout(() => {
        item.createdAt = new Date();
        item.updatedAt = new Date();
      }, 500);
    });

    return {
      id: this.inmemoryData.length > 0 ? this.inmemoryData.slice(-1)[0].id + 1 : 1,
      ...args,
      data,
      createdAt: new Date(),
    };
  }

  public async all(): Promise<TEntity[]> {
    return this.inmemoryData;
  }

  public async find(id: number): Promise<TEntity> {
    return this.inmemoryData.find((item) => item.id === id);
  }

  public async getMany(filter: Partial<TEntity>): Promise<TEntity[]> {
    let filtered = this.inmemoryData;

    for (const key in filter) {
      filtered = filtered.filter((item) => item[key] === filter[key]);
    }
    return filtered;
  }

  public async getOne(filter: Partial<TEntity>): Promise<TEntity> {
    return this.inmemoryData.find((item) => item.id === filter.id);
  }

  public async patch(id: number, data: Partial<TEntity>): Promise<TEntity> {
    const index = this.getIndexById(id);

    if (index) {
      for (const key in data) {
        data.updatedAt = new Date();
        this.inmemoryData[index][key] = data[key];
      }

      return this.inmemoryData[index];
    }

    return undefined;
  }

  public async update(id: number, data: TEntity): Promise<TEntity> {
    const index = this.getIndexById(id);

    if (index >= 0) {
      data.updatedAt = new Date();
      this.inmemoryData[index] = { ...this.inmemoryData[index], ...data };
      return this.inmemoryData[index];
    }
    return undefined;
  }

  public delete(id: number): Promise<void> {
    const index = this.getIndexById(id);

    if (index) {
      this.inmemoryData.splice(index, 1);
    }
    return undefined;
  }

  private getIndexById(id: number) {
    const index = this.inmemoryData.findIndex((item) => item.id === id);
    return index;
  }
}
