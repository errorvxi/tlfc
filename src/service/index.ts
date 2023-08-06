import { BASE_URL, TIME_OUT } from './config'
import TLFCRequest from './request'

const tlfcRequest = new TLFCRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})

export default tlfcRequest
