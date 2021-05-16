import {Request, Response} from 'express';
import {CreateCourseService} from '../services/CreateCourseService'
import { GetCoursesUnitsService } from '../services/GetCoursesUnitsService';

class CourseUnitController {
    async create(request:Request, response:Response){
       const courseunitData = request.body

       const createCourseUnit = new CreateCourseService();

       const courseunit = await createCourseUnit.execute(courseunitData);

       return response.json(courseunit);
    }

    async show(request:Request, response:Response){
        const userId = request.body.user;

        const getCourseUnits = new GetCoursesUnitsService();

        const courseUnits = await getCourseUnits.execute(userId);

        return response.json(courseUnits);
    }
}

export {CourseUnitController}