import {getRepository} from 'typeorm'
import {CourseUnit} from '../models/CourseUnit'

interface CourseUnitData {
    name: string;
    description: string;
}

class CreateCourseService { 
    async execute({name, description}: CourseUnitData){
    
        const CourseUnitRepository = getRepository(CourseUnit);

        const courseUnit = CourseUnitRepository.create({
            name,
            description
        });

        await CourseUnitRepository.save(courseUnit);
        
        return courseUnit;   
    }
}

export {CreateCourseService};