// import { Evaluation } from 'src/domain/customers/entities/evaluation.entity';
import { Usuario } from '../entity/usuarios.entity';

export interface IUsuarioAvaliacaoRepository {
  validandoAvaliacao(user: Usuario): Promise<boolean>;

  diasAvaliacao(user: Usuario): Promise<number>;

  // usuario(user: Usuario): Promise<Evaluation>;
}
