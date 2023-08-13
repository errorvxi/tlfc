import {
  accountLoginRequest,
  accountRegisterRequest,
  requestUserDocsById,
  requestUserInfoById
} from '@/service/module/user'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IUserState } from './type'
import localCache from '@/utils/localCache'
// import useToken from '@/hooks/useToken'
export const fetchAcountRegisterAction = createAsyncThunk(
  'userInfo',
  async (payload: any) => {
    // register logic
    await accountRegisterRequest(payload)
  }
)
export const fetchAcountLoginAction = createAsyncThunk(
  'user/login',
  async (payload: any, { dispatch }) => {
    // 1.login logic
    const loginResult = await accountLoginRequest(payload)
    const { id, token } = loginResult.data

    localCache.setCache('token', JSON.stringify(token))
    dispatch(changeUserTokenAction(token))
    localCache.setCache('id', id)
    // 2.jump to home
  }
)

export const fetchUserInfoDataAction = createAsyncThunk(
  'user/getInfo',
  async (id: number, { dispatch }) => {
    // 1.request for user info
    const userInfoResult = await requestUserInfoById(id)
    const userInfo = userInfoResult.data
    dispatch(changeUserInfoAction(userInfo))
    console.log(userInfoResult)
    // 2.request for user documents
    const docsResult = await requestUserDocsById(id)
    const docs = docsResult.data
    console.log(docsResult)
    console.log(docs)
    dispatch(changeUserDocuments(docs))
  }
)

const initialState: IUserState = {
  id: '',
  username: '',
  token: '',
  documents: []
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeUserTokenAction(state, { payload }) {
      state.token = payload
    },
    changeUserInfoAction(state, { payload }) {
      state.id = payload.id
      state.username = payload.username
    },
    changeUserDocuments(state, { payload }) {
      state.documents = payload
      console.log(state.documents)
    }
  }
})

export const {
  changeUserDocuments,
  changeUserInfoAction,
  changeUserTokenAction
} = userSlice.actions

export default userSlice.reducer
