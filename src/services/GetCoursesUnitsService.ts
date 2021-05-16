import { getRepository } from "typeorm";
import { CourseUnit } from "../models/CourseUnit";

interface UserId {
    id?: string;
}

class GetCoursesUnitsService {

    public async execute({id}: UserId){

        const courseUnitRepository = getRepository(CourseUnit);

        const courseUnit = courseUnitRepository.find();

        if(!courseUnit){
            return{
                message:'course units not found'
            }
        }

        return courseUnit;

    }
}

export {GetCoursesUnitsService};
//