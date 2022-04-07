import { configure, getLogger } from 'log4js'
import config from '../config'

configure(config.log)
const defaultLogger = getLogger()

export const accessLogger = getLogger('access')
export const commonLogger = getLogger('common')
export default defaultLogger
