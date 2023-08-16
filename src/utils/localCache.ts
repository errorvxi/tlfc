class LocalCache {
  setCache(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  getCache(key: string): null | string {
    // obj => string => obj
    const value = window.localStorage.getItem(key)
    if (value != 'undefined') {
      return JSON.parse(value as string)
    }
    return null
  }

  deleteCache(key: string) {
    window.localStorage.removeItem(key)
  }

  clearCache() {
    window.localStorage.clear()
  }
}

export default new LocalCache()
