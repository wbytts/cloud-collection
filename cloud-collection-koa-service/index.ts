import { runServe } from './app'
import config from './app/config'

runServe(config.server.port || 8080)
