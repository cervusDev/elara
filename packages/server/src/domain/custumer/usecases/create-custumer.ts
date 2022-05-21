import { Inject, Injectable } from "@nestjs/common";
import { Usecase } from "share/abstract/usecase";
import { PROVIDER as CUSTUMER} from "../constants/provider";
import { Custumer } from "../entity/custumer.entity";
import { ICustumerRepository } from "../repository/custumers-repository";

@Injectable()
export class CreateCustumerUseCase implements Usecase<Custumer> {
  constructor (
    @Inject(CUSTUMER.REPOSITORY)
    private readonly custumerRepository: ICustumerRepository,
  ) {}

  public async execute(input: Custumer): Promise<Custumer> {
    return this.custumerRepository.create(input);
  }

}