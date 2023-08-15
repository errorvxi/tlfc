import tlfcRequest from '@/service'

export function createDocument(doc_name: string, user_id: number) {
  return tlfcRequest.post({
    url: 'api/documents/' + user_id + '/creat',
    data: { doc_name, user_id }
  })
}

// export function editDocument(url: string, editData: any) {
//   return tlfcRequest.put({ url: url, data: editData })
// }

export function deleteDocument(user_id: number, doc_id: number) {
  return tlfcRequest.put({
    url: 'api/documents/' + user_id + '/delete',
    data: doc_id
  })
}

export function shareOurDocument(url: string) {
  return tlfcRequest.post({ url: url })
}

export function shareInDocument(url: string) {
  return tlfcRequest.post({ url: url })
}
