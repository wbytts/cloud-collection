import KoaRouter from 'koa-router';
import adminController from '../controller/adminController';
import indexController from '../controller/indexController';
import loginController from '../controller/loginController';
import zczyController from '../controller/zczyController';

const router = new KoaRouter({ prefix: '/admin' });

router.get('/', indexController.index);
router.get('/login', loginController.index);
router.get('/getAdminById', adminController.getAdminById);

export default router;
