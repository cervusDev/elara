export interface IUserAuth {
  sub: number; // “id” do usuario
  email: string; // email do usuario
  cliente: number; // id do cliente
  nome?: string; // nome do usuario
  categoria: number; // id da categoria
  diasAvaliacao?: number; // dias de avaliacao
  primeiroAcesso?: boolean; // se o usuario ja fez o primeiro acesso
  empresaId?: number; // “id” da empresa
}
