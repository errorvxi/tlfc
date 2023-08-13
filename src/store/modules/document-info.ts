import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IDocumentInfoState } from './type'

const initialState: IDocumentInfoState = {
  doc_id: '-1',
  doc_name: '',
  created_on: '',
  last_accessed: '',
  status: 0,
  permission_type: 0
}

export const createDocAction = createAsyncThunk(
  'docInfo/create',
  async (payload: any) => {
    await payload
  }
)

export const editDocAction = createAsyncThunk(
  'docInfo/edit',
  async (payload: any) => {
    await payload
  }
)

export const deleteDocAction = createAsyncThunk(
  'docInfo/delete',
  async (payload: any) => {
    await payload
  }
)

export const shareDocAction = createAsyncThunk(
  'docInfo/share',
  async (payload: any) => {
    await payload
  }
)

const documentInfoSlice = createSlice({
  name: 'document-info',
  initialState,
  reducers: {
    changeDocInfoAction(state, { payload }) {
      state = payload
    }
  }
})

export const { changeDocInfoAction } = documentInfoSlice.actions

export default documentInfoSlice.reducer
