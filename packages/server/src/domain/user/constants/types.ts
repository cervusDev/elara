export interface IUserAuth {
  sub: number; // “id” do usuario
  email: string; // email do usuario
  nome?: string; // nome do usuario
  categoria: number; // id da categoria
  primeiroAcesso?: boolean; // se o usuario ja fez o primeiro acesso
}
