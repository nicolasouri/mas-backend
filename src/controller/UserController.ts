import {Request, Response} from 'express';
import { CreateUserService } from '../services/CreateUserService';
<<<<<<< Updated upstream
=======
import { GetUserService } from '../services/GetUserService';
>>>>>>> Stashed changes

class UserController {
     async create(request:Request, response:Response){
        const userData = request.body

        const createUser = new CreateUserService();

        const user = await createUser.execute(userData);

        return response.json(user);
     }
<<<<<<< Updated upstream
=======

     async show(request:Request, response:Response){
        const userData = request.body.user

        const getUser = new GetUserService();

        const user = await getUser.execute(userData);

        return response.json(user)
     }
>>>>>>> Stashed changes
}

export {UserController};