import dotenv from 'dotenv';

dotenv.config();

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
      default: { type: 'file', filename: './logs/default.log' },
      common: { type: 'file', filename: './logs/common.log' },
      access: { type: 'file', filename: './logs/access.log' },
      db: { type: 'file', filename: './logs/db.log' },
    },
    categories: {
      default: { appenders: ['default'], level: 'info' },
      common: { appenders: ['common'], level: 'trace' },
      access: { appenders: ['access'], level: 'info' },
      db: { appenders: ['db'], level: 'DEBUG' },
    },
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    expire: process.env.JWT_EXPIRE,
  },
};

export default config;

// 路由白名单
export const whiteList = [
  '/admin/login', // 登录接口
  '/admin/register', // 注册接口
];
