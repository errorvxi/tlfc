import tlfcRequest from '@/service'

export function createDocument(url: string, newData: any) {
  return tlfcRequest.post({
    url: url,
    data: newData
  })
}

export function editDocument(url: string, editData: any) {
  return tlfcRequest.put({ url: url, data: editData })
}

export function deleteDocument(url: string) {
  return tlfcRequest.delete({ url: url })
}

export function shareOurDocument(url: string) {
  return tlfcRequest.post({ url: url })
}

export function shareInDocument(url: string) {
  return tlfcRequest.post({ url: url })
}
