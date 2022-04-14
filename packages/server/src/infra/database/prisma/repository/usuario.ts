/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { Usuario } from 'domain/usuario/entity/usuarios.entity';
import { IUsuarioRepository } from 'domain/usuario/repository/users-repository';

@Injectable()
export class UsuarioPrismaRepository implements IUsuarioRepository {
  getByEmail(email: string): Promise<Usuario> {
    throw new Error('Method not implemented.');
  }

  public create(data: Usuario): Promise<Usuario> {
    throw new Error('Method not implemented.');
  }

  public update(id: number, data: Partial<Usuario>): Promise<Usuario> {
    throw new Error('Method not implemented.');
  }

  public find(id: number): Promise<Usuario> {
    throw new Error('Method not implemented.');
  }

  public all(): Promise<Usuario[]> {
    throw new Error('Method not implemented.');
  }

  public delete(id: number): Promise<void> {
    throw new Error('Method not implemented.');
  }

  public createMany?(data: Usuario[], args?: never): Promise<Usuario[]> {
    throw new Error('Method not implemented.');
  }
}
