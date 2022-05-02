export class ApiService<T = never, R = T> {
  constructor(DOMAIN_REF: string) {
    this.DOMAIN_REF = DOMAIN_REF
  }
  private readonly DOMAIN_REF
}
