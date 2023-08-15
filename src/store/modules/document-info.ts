import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IDocumentInfoState } from './type'
import { createDocument, deleteDocument } from '@/service/module/document-info'
import {
  changeUserDocsmentsByunShift,
  changeUserDocumentsByDeleteId
} from './user'

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
  async (payload: any, { dispatch }) => {
    const { doc_name, user_id } = payload
    const createResult = await createDocument(doc_name, user_id)
    const { doc_id, created_on } = createResult.data

    const newItem = {
      doc_id: doc_id,
      doc_name: doc_name,
      created_on: created_on,
      last_accessed: created_on,
      statue: 1,
      permission_type: 1
    }
    dispatch(changeUserDocsmentsByunShift(newItem))
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
  async (payload: any, { dispatch }) => {
    // 1.delete user documents by document i
    const { user_id, docs_id } = payload
    for (const id of docs_id) {
      const deleteRes: any = await deleteDocument(user_id, id)
      if (deleteRes.statusText === 'OK') {
        dispatch(changeUserDocumentsByDeleteId(id))
      }
      if (deleteRes.code === 'ERR_BAD_REQUEST') {
        console.log('删除失败')
      }
    }
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
