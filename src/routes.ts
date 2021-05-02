import {Router} from 'express'
import {UserController} from './controller/UserController';
import {CourseUnitController} from './controller/CourseUnitController';
import {ActivyController} from './controller/ActivyController';

const userController = new UserController();
const courseUnitController = new CourseUnitController();
const activyController = new ActivyController();

const routes = Router();

routes.get('/user', userController.create)
routes.post('/courseunit', courseUnitController.create);
routes.post('/activy', activyController.create);
    
export default routes;
//