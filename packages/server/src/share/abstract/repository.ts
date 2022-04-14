import { Entity } from './entity';

/**
 * Base repository class.
 * Segregation Interface and Implementation.
 *
 * @export
 * @abstract
 * @class Repository
 * @template T
 */
export abstract class Repository<T extends Entity, D = never> {
  public abstract create(data: T): Promise<T>;

  public abstract update(id: number, data: Partial<T>): Promise<T>;

  public abstract find(id: number): Promise<T>;

  public abstract all(): Promise<T[]>;

  public abstract delete(id: number): Promise<void>;

  public abstract createMany?(data: T[], args?: D): Promise<T[] | D>;
}
