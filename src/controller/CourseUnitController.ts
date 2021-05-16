import {Request, Response} from 'express';
import {CreateCourseService} from '../services/CreateCourseService'
<<<<<<< Updated upstream
=======
import { GetCoursesUnitsService } from '../services/GetCoursesUnitsService';
>>>>>>> Stashed changes

class CourseUnitController {
    async create(request:Request, response:Response){
       const courseunitData = request.body

       const createCourseUnit = new CreateCourseService();

       const courseunit = await createCourseUnit.execute(courseunitData);

       return response.json(courseunit);
    }
<<<<<<< Updated upstream
=======

    async show(request:Request, response:Response){
        const userId = request.body.user;

        const getCourseUnits = new GetCoursesUnitsService();

        const courseUnits = await getCourseUnits.execute(userId);

        return response.json(courseUnits);
    }
>>>>>>> Stashed changes
}

export {CourseUnitController}