import {Router} from 'express'
import {UserController} from './controller/UserController';
import {CourseUnitController} from './controller/CourseUnitController';
import {ActivityController} from './controller/ActivityController';
import { AuthenticateController } from './controller/AuthenticateController';
import authenticated from './middlewares/authenticated';

<<<<<<< Updated upstream
const userController = new UserController();
const courseUnitController = new CourseUnitController();
const activityController = new ActivityController();
const authenticateController = new AuthenticateController();

const routes = Router();
=======
const routes = Router();

<<<<<<< Updated upstream
routes.get('/user', (request, response) => response.json({
    message: 'Hello World'
}))

routes.get('/user/:id/', (request, response) => {
    const {id} = request.params;

    response.json({
        userId:id
    })
})

=======
<<<<<<< Updated upstream
routes.post('/auth', authenticateController.create);

routes.post('/user', userController.create);
routes.post('/courseunit', courseUnitController.create);
routes.post('/activity', activityController.create);
=======
<<<<<<< Updated upstream
>>>>>>> Stashed changes
routes.get('/user/', (request, response) => {
    const {nome, idade} = request.query
    
    response.json({
        nome,
        idade
    })
})

routes.post('/user', (request, response) => {
    const {name, email, password} = request.body
<<<<<<< Updated upstream
=======
=======
routes.post('/user', userController.create);
routes.post('/courseunit', authenticated, courseUnitController.create);
routes.post('/activity', authenticated, activityController.create);
>>>>>>> Stashed changes
>>>>>>> Stashed changes
>>>>>>> Stashed changes
>>>>>>> Stashed changes

routes.post('/auth', authenticateController.create);

routes.post('/user', userController.create);
routes.post('/courseunit', courseUnitController.create);
routes.post('/activity', activityController.create);

routes.get('/user', authenticated, userController.show);
routes.get('/courseunit', authenticated, courseUnitController.show);
routes.get('/activity', authenticated, activityController.show);
    
export default routes;
//