'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/courses', () => {
  return { message: 'HCode treinamentos courses!' }
})

Route.post('/courses', 'CourseController.store');
Route.delete('courses/:id', 'CourseController.delete');
