/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, UseGuards } from '@nestjs/common';
import { Usuario } from 'domain/usuario/entity/usuarios.entity';
import { BaseController } from 'share/abstract/controller';

@UseGuards()
@Controller()
export class UsuarioController extends BaseController<Usuario> {
  public create?(...args: any): Promise<Usuario> {
    throw new Error('Method not implemented.');
  }

  public all?(...args: any): Promise<Usuario[]> {
    throw new Error('Method not implemented.');
  }

  public find?(...args: any): Promise<Usuario> {
    throw new Error('Method not implemented.');
  }

  public patch?(...args: any): Promise<Usuario> {
    throw new Error('Method not implemented.');
  }

  public delete?(...args: any): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
