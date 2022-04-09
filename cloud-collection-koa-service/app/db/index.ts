import { Sequelize } from 'sequelize-typescript';
import config from '../config';
import path from 'path';
import { dbLogger } from '../logger';

const sequelize = new Sequelize(
  config.db.name as string, // 数据库名称
  config.db.username as string, // 用户名
  config.db.password, // 密码
  {
    host: config.db.host, // 主机名
    port: config.db.port as unknown as number, // 端口号
    dialect: 'mysql', // 数据库方言
    // 模型类所在的位置
    models: [path.join(__dirname, '..', 'model/**/*.ts'), path.join(__dirname, '..', 'model/**/*.js')],
    define: {
      timestamps: true,
      // 每个表自动增加一些字段：创建时间、更新时间、删除时间
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: 'deleted_at',
      freezeTableName: true, // 防止sequelize将表名复数化
    },
    // 选择一种日志记录参数
    // logging: console.log, // 默认值,显示日志函数调用的第一个参数
    // logging: (...msg) => console.log(msg), // 显示所有日志函数调用参数
    // logging: false, // 禁用日志记录
    // logging: msg => logger.debug(msg), // 使用自定义记录器(例如Winston 或 Bunyan),显示第一个参数
    // logging: logger.debug.bind(logger), // 使用自定义记录器的另一种方法,显示所有消息
    // logging: msg => dbLogger.info(msg),
    logging: msg => console.log('【数据库日志】=> ' + msg),
  }
);

const authDB = async () => {
  try {
    await sequelize.authenticate(); // 数据库认证
    console.log('===> 数据库连接成功');
    if (config.env === 'dev') {
      await sequelize.sync({ alter: true }); // 根据模型同步创建表, 生成环境最好关闭
      console.log('===> 数据库表结构同步完成');
    }
  } catch (error) {
    console.error(error);
  }
};

export default authDB;
