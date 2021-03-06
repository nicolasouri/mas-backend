import {Router} from 'express'
import {UserController} from './controller/UserController';
import {CourseUnitController} from './controller/CourseUnitController';
import {ActivityController} from './controller/ActivityController';
import { AuthenticateController } from './controller/AuthenticateController';
import authenticated from './middlewares/authenticated';

const userController = new UserController();
const courseUnitController = new CourseUnitController();
const activityController = new ActivityController();
const authenticateController = new AuthenticateController();

const routes = Router();

routes.post('/auth', authenticateController.create);

routes.post('/user', userController.create);
routes.post('/courseunit', authenticated, courseUnitController.create);
routes.post('/activity', authenticated, activityController.create);

routes.get('/user', authenticated, userController.show);
routes.get('/courseunit', authenticated, courseUnitController.show);
routes.get('/activity', authenticated, activityController.show);
    
export default routes;
//