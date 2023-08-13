import tlfcRequest from '@/service'
import { IAccount, IRegister } from './type'

export function accountLoginRequest(account: IAccount) {
  return tlfcRequest.post({
    url: '/api/users/userLogin',
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
    url: '/api/users/' + id + '/documents'
  })
}

export function accountRegisterRequest(register: IRegister) {
  return tlfcRequest.post({
    url: '/api/users/register',
    data: register
  })
}
