import { Sequelize } from 'sequelize-typescript';
import config from '../config';
import path from 'path';

const sequelize = new Sequelize(
  config.db.name as string, // 数据库名称
  config.db.username as string, // 用户名
  config.db.password, // 密码
  {
    host: config.db.host, // 主机名
    port: config.db.port as unknown as number, // 端口号
    dialect: 'mysql', // 数据库方言
    models: [path.join(__dirname, '..', 'model/**/*.ts'), path.join(__dirname, '..', 'model/**/*.js')],
    define: {
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: 'deleted_at',
    },
  }
);

const authDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('===> 数据库连接成功');
    if (config.env === 'dev') {
      await sequelize.sync({ alter: true }); // 根据模型同步创建表,生成环境需要关闭
      console.log('===> 表结构同步完成');
    }
  } catch (error) {
    console.error(error);
  }
};

export default authDB;
