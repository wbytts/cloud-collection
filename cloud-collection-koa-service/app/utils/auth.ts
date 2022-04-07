import jwt from 'jsonwebtoken'
import config from '../config'

/**
 * 生成token
 * @param data
 * @returns
 */
export function sign(data: any) {
  const payload = { ...data }
  return jwt.sign(payload, config.jwt.secret as string, { expiresIn: config.jwt.expire })
}

/**
 * 验证token
 * @param token
 * @returns
 */
export function verify(token: string) {
  try {
    const decoded = jwt.verify(token, config.jwt.secret as string)
    return { data: decoded, error: null }
  } catch (err) {
    return { data: null, error: err }
  }
}
