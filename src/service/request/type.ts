import { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface TLFCInterceptors {
  requestSuccessFn: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestFailureFn: (err: any) => any
  responseSuccessFn: (config: AxiosResponse) => AxiosResponse
  responseFailureFn: (err: any) => any
}

export interface TLFCRequestConfig extends AxiosRequestConfig {
  interceptors?: TLFCInterceptors
}
