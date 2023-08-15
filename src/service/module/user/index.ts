import tlfcRequest from '@/service'
import { IAccount, IRegister } from './type'

export function accountLoginRequest(account: IAccount) {
  return tlfcRequest.get({
    url: '/api/users/login',
    data: account
  })
}

export function requestUserInfoById(id: number) {
  return tlfcRequest.get({
    url: '/api/users/' + id + '/info'
  })
}

export function requestUserDocsById(id: number) {
  return tlfcRequest.get({
    url: '/api/documents/' + id + '/gets'
  })
}

export function accountRegisterRequest(register: IRegister) {
  return tlfcRequest.post({
    url: '/api/users/register',
    data: register
  })
}
