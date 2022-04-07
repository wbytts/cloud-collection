import dotenv from 'dotenv';
import log from './log';
import db from './db';
import jwt from './jwt';
import server from './server';

dotenv.config();

const config = {
  env: process.env.NODE_ENV,
  server, // 服务配置
  db, // 数据库配置
  log, // 日志配置
  jwt, // jwt配置
};

export default config;
