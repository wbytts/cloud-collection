import KoaRouter from 'koa-router'
import adminController from '../controller/adminController'
import indexController from '../controller/indexController'
import loginController from '../controller/loginController'

const router = new KoaRouter({ prefix: '/' })

router.get('/', indexController.index)

// 登录注册
router.get('/login', loginController.index)

// 用户管理
router.get('/getAdminById', adminController.getAdminById)

export default router
