export const required = (value) => {
    if (Array.isArray(value)) return !!value.length
    if (value === undefined || value === null) {
      return false
    }
  
    if (value === false) {
      return true
    }
  
    if (value instanceof Date) {
      return !isNaN(value.getTime())
    }
  
    if (typeof value === 'object') {
      return !Object.values(value).every((x) => x === null || x === '')
    }
  
    return !!String(value).length
  }
  
  export const len = (value) => {
    if (value) {
      if (Array.isArray(value)) return value.length
      if (typeof value === 'object') {
        return Object.keys(value).length
      }
      return String(value).length
    }
    return null
  }
  
  export const regEx = (expr) => (value) => !required(value) || expr.test(value)
  