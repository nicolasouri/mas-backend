import {Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn} from 'typeorm'
import {v4 as uuid} from 'uuid'

import { CourseUnit } from './CourseUnit';

class Activy{

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
    @PrimaryColumn()
    readonly id: string

    @Column()
    name: string

    @Column()
    course_unit_id: string

    @CreateDateColumn()
    created_at: Date;

    @CreateDateColumn()
    activy_date: Date

    @ManyToOne(() => CourseUnit, course_unit => course_unit.activies)
    course_unit: CourseUnit
}

export{Activy}