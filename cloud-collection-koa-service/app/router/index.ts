import KoaRouter from 'koa-router'
import loginController from '../controller/loginController'
import testController from '../controller/testController'
import userController from '../controller/userController'

const router = new KoaRouter({ prefix: '' })


// 登录注册
router.get('/admin/login', loginController.login)

// 用户管理
router.get('/queryUserById', userController.queryUserById)

// 临时接口测试
router.get('/test', testController.index)
router.get('/test/allUser', testController.findAllUser)


export default router
