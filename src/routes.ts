import {Router} from 'express'
import {UserController} from './controller/UserController';
import {CourseUnitController} from './controller/CourseUnitController';
import {ActivyController} from './controller/ActivyController';
import { AuthenticateController } from './controller/AuthenticateController';
import authenticated from './middlewares/authenticated';

const userController = new UserController();
const courseUnitController = new CourseUnitController();
const activyController = new ActivyController();
const authenticateController = new AuthenticateController

const routes = Router();


routes.post('/user', userController.create);
routes.post('/auth', authenticateController.create);
routes.post('/courseunit', authenticated, courseUnitController.create);
routes.post('/activy', authenticated, activyController.create);
    
export default routes;
//