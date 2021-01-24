'use strict'

const Course = use('App/Models/Course');

class CourseController {
    async store({ request }){
        const dataToCreate = request.only(['name','description','url','price']);
        return await Course.create(dataToCreate);
    }
    async delete({ params }){
        const course = await Course.findOrFail(params.id);
        await course.delete();
        return {
            message: 'Curso deletado!'
        }

    }
}

module.exports = CourseController
