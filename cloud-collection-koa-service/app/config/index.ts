import dotenv from 'dotenv'

dotenv.config()

const config = {
  env: process.env.NODE_ENV,
  server: {
    port: process.env.SERVER_PORT,
  },
  db: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    name: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  },
  log: {
    appenders: {
      cheese: { type: 'file', filename: './logs/cheese.log' },
      access: { type: 'file', filename: './logs/access.log' },
    },
    categories: {
      default: { appenders: ['cheese'], level: 'info' },
      access: { appenders: ['access'], level: 'info' },
    },
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    expire: process.env.JWT_EXPIRE,
  },
}

export default config
