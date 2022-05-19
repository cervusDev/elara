import { axiosInstance } from "./axios"

type QueryProps = Record<string, any>
type DataPatch<P> = Partial<P>
type Post<T> = Omit<T, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt'>
interface IGetById {
  id: number
  query?: QueryProps
}

export const mountUrl = (url: string, record: Record<string, any>) => {
  let arr: Array<string> = [];
  let queryParams: Array<string> = [];
  
  Object.entries(record).forEach(([key, value]) => {
      const param = `${key}=${value}`;
      arr.push(param)
  })

  for (let index = 0; index < arr.length; index++) {
      if (index === 0) {
          queryParams.push(`?${arr[index]}`)
      }else {
          queryParams.push(arr[index])
      }
  }
  return `${url}` + queryParams.join('&');
}

export class ApiService<T = never, R = T> {
  constructor(DOMAIN_REF: string) {
    this.DOMAIN_REF = DOMAIN_REF
  }
  private readonly DOMAIN_REF

  public get(queryParams: QueryProps, v = 'v1') {
    const url = mountUrl(this.DOMAIN_REF, queryParams)
    return axiosInstance.get<R[]>(`${v}/${url}`) as unknown as Promise<R[]>
  }

  public getParam(param: string | number, v = 'v1') {
    return axiosInstance.get<R>(`${v}/${this.DOMAIN_REF}/${param}`) as unknown as Promise<R[]>
  }

  public getById({ id, query }: Partial<IGetById>, v = 'v1') {
    const url = mountUrl('', query as QueryProps)
    return axiosInstance.get<R>(`${v}/${this.DOMAIN_REF}/${id}/${url}`) as unknown as Promise<R>
  }

  public post(data: Post<T>, v = 'v1') {
    return axiosInstance.post<Post<T>, R>(`${v}/${this.DOMAIN_REF}`, data as T) as unknown as Promise<R>
  }

  public patch(id: number, data: DataPatch<T>, v = 'v1') {
    return axiosInstance.patch<T, R>(`${v}/${this.DOMAIN_REF}/${id}`, data as T) as unknown as Promise<R>
  }

  public delete(id: number, v = 'v1') {
    return axiosInstance.delete<void>(`${v}/${this.DOMAIN_REF}/${id}`) as unknown as Promise<void>
  }

  public put(data: Partial<T>, v = 'v1') {
    return axiosInstance.put<Partial<T>, R>(`${v}/${this.DOMAIN_REF}`, data) as unknown as Promise<R>
  }
}
