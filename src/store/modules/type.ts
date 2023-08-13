export interface IUserState {
  id: string
  username: string
  token: string
  documents: any[]
}

export interface IDocumentInfoState {
  doc_id: string
  doc_name: string
  created_on: string
  last_accessed: string
  status: number
  permission_type: number
}
