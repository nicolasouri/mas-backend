import { getRepository } from "typeorm";
import { Activity } from "../models/Activity";

interface UserId {
    id?: string;
}

class GetActiviesService {

    public async execute({id}: UserId){

        const activityRepository = getRepository(Activity);

        const activies = activityRepository.find();

        if(!activies){
            return{
                message:'activies not found'
            }
        }

        return activies;

    }
}

export {GetActiviesService};