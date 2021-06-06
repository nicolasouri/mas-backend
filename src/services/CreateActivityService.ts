import {getRepository} from 'typeorm';
import {Activity} from '../models/Activity';

interface ActivityData {
    name: string;
    activity_date: string;
<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
>>>>>>> Stashed changes
    course_unit_id: string;
}

class CreateActivityService {
    async execute( {name,activity_date, course_unit_id}:ActivityData){
<<<<<<< Updated upstream
=======
=======
    grade: number;
    courseUnitId: string;
}

class CreateActivityService {
    async execute( {name, activity_date, grade, courseUnitId}:ActivityData){
>>>>>>> Stashed changes
>>>>>>> Stashed changes

        const activityRepository = getRepository(Activity);

        const activity = activityRepository.create({
            name,
            activity_date,
<<<<<<< Updated upstream
            course_unit_id
=======
<<<<<<< Updated upstream
            course_unit_id
=======
            grade,
            courseUnitId
>>>>>>> Stashed changes
>>>>>>> Stashed changes
        });

        await activityRepository.save(activity);
        
        return activity;
    }
}

export {CreateActivityService};