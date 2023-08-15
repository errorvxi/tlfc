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
    localCache.setCache('token', '1')
    // localCache.setCache('token', JSON.stringify(token))
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
  }
)

export const fetchUserDocsDataAction = createAsyncThunk(
  'user/getData',
  async (id: number, { dispatch }) => {
    // 1.request for user documents
    const docsResult = await requestUserDocsById(id)
    const docs = docsResult.data
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
    changeUserDocsmentsByunShift(state, { payload }) {
      state.documents.unshift(payload)
    },
    changeUserDocumentsByDeleteId(state, { payload }) {
      const id = payload
      const res = state.documents.find((item) => item.id == id)
      state.documents.splice(res, 1)
    },
    changeUserDocuments(state, { payload }) {
      state.documents = payload.data
    }
  }
})

export const {
  changeUserDocuments,
  changeUserInfoAction,
  changeUserTokenAction,
  changeUserDocsmentsByunShift,
  changeUserDocumentsByDeleteId
} = userSlice.actions

export default userSlice.reducer
