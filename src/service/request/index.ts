import axios from 'axios'
import type { AxiosInstance } from 'axios'
import { TLFCRequestConfig } from './type'

class TLFCRequest {
  instance: AxiosInstance

  constructor(config: TLFCRequestConfig) {
    this.instance = axios.create(config)

    // interceptors: loading, token, change config
    this.instance.interceptors.request.use(
      (config) => {
        // loading / token
        return config
      },
      (err) => {
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        return res
      },
      (err) => {
        return err
      }
    )
  }

  // request
  request(config: TLFCRequestConfig) {
    return this.instance.request(config)
  }

  get() {}

  posrt() {}
}

export default TLFCRequest
