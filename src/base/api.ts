import axios, {AxiosInstance, AxiosError} from 'axios'
import {QueryClient, QueryClientConfig} from '@tanstack/react-query'

import {showSnackbar} from '#base'

export const handleError = (error: AxiosError<any>) => {
  showSnackbar(error.message, 'error')
  return Promise.reject(error)
}

export const api: AxiosInstance = axios.create({
  baseURL: 'https://fakestoreapi.com',
})

api.interceptors.response.use(undefined, handleError)

const queryClientConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
}

export const queryClient = new QueryClient(queryClientConfig)
