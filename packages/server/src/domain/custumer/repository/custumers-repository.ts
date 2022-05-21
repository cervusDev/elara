import { Repository } from "share/abstract/repository";
import { Custumer } from '../entity/custumer.entity'

export abstract class ICustumerRepository extends Repository<Custumer> {
  public abstract findByEmail(email: string): Promise<Custumer>;
}
