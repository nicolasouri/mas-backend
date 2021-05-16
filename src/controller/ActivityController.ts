import {Request, Response} from 'express';
import {CreateActivityService} from '../services/CreateActivityService'
<<<<<<< Updated upstream
=======
import { GetActiviesService } from '../services/GetActiviesService';
>>>>>>> Stashed changes

class ActivityController {
    async create(request:Request, response:Response){
       const activityData = request.body

       const createActivity = new CreateActivityService();

       const activity = await createActivity.execute(activityData);

       return response.json(activity);
    }
<<<<<<< Updated upstream
=======

    async show(request:Request, response:Response){
        const userId = request.body.user;

        const getActivies = new GetActiviesService();

        const activies = await getActivies.execute(userId);

        return response.json(activies);
    }
>>>>>>> Stashed changes
}

export {ActivityController}