import { Repository } from 'src/share/abstract/repository';
import { Usuario } from '../entity/usuarios.entity';

export interface IUsuarioRepository extends Repository<Usuario> {
  getByEmail(email: string): Promise<Usuario>;
}
