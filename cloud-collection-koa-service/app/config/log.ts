export default {
  appenders: {
    default: { type: 'file', filename: './logs/default.log' },
    common: { type: 'file', filename: './logs/common.log' },
    access: { type: 'file', filename: './logs/access.log' },
  },
  categories: {
    default: { appenders: ['default'], level: 'info' },
    common: { appenders: ['common'], level: 'trace' },
    access: { appenders: ['access'], level: 'info' },
  },
};
