import { QueryClient, QueryClientProvider } from 'react-query'

interface IProps {
  children: React.ReactNode
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: 1000 * 60 * 5
    }
  }
})

export function ReactQuery({ children }: IProps) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
