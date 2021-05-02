import {Request, Response} from 'express';
import {CreateCourseService} from '../services/CreateCourseService'

class CourseUnitController {
    async create(request:Request, response:Response){
       const courseunitData = request.body

       const createCourseUnit = new CreateCourseService();

       const courseunit = await createCourseUnit.execute(courseunitData);

       return response.json(courseunit);
    }
}

export {CourseUnitController}