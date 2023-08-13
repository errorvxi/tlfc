export interface IAccount {
  username: string
  password: string
}

export interface ILoginResult {
  id: number
  name: string
  token: string
}

export interface IDataType<T = any> {
  code: number
  data: T
}

export interface IRegister {
  username: string
  displayName: string
  password: string
}
