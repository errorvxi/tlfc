import { WS_URL } from '../config'

class tlfcWebSocket {
  instance: WebSocket
  filename: string
  constructor(filename: string) {
    this.filename = filename
    this.instance = new WebSocket(WS_URL + filename)
    this.instance.onopen = this.onOpen
    this.instance.onerror = this.onError
    this.instance.onclose = this.onClose
  }

  send(data: string) {
    return this.instance.send(data)
  }

  close() {
    return this.instance.close()
  }
  onOpen() {}
  onError() {}
  onClose() {}
}

export default tlfcWebSocket
