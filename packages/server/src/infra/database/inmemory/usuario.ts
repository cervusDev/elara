import { Usuario } from 'domain/usuario/entity/usuarios.entity';
import { IUsuarioRepository } from 'domain/usuario/repository/users-repository';
import { InMemoryRepository } from '.';

export class UsuarioRepositoryInMemmory extends InMemoryRepository<Usuario> implements IUsuarioRepository {
  getByEmail(email: string): Promise<Usuario> {
    throw new Error('Method not implemented.');
  }
}
