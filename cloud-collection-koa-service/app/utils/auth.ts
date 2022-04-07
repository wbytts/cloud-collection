import jwt from 'jsonwebtoken'
import config from '../config'

export function sign(data: any) {
  const payload = { ...data }
  return jwt.sign(payload, config.jwt.secret as string, { expiresIn: config.jwt.expire })
}

export function verify(token: string) {
  try {
    const decoded = jwt.verify(token, config.jwt.secret as string)
    return { data: decoded, error: null }
  } catch (err) {
    return { data: null, error: err }
  }
}
