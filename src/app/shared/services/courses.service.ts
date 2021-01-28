import { Injectable } from '@angular/core';

export interface ICourse {
  id: number;
  title: string;
  description: string;
  percentComplete: number;
  favorite: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private courses: ICourse[] = [
    {
      id: 1,
      title: 'Angular 9 Fundamentals',
      description: 'Learn the fundamentals of Angular 9',
      percentComplete: 26,
      favorite: true
    },
    {
      id: 2,
      title: 'Javascript Fundamentals',
      description: 'Learn the fundamentals of Javascript',
      percentComplete: 30,
      favorite: false
    },
    {
      id: 3,
      title: 'Component Fundamentals',
      description:
        'Learn the fundamentals of Angular components',
      percentComplete: 55,
      favorite: false
    }
  ];

  constructor() { }

  all(): ICourse[] {
    return this.courses;
  }

  find(courseId: number) {
    // TODO: find course
  }

  create(course: ICourse) {
    // TODO: create course
  }

  update(course: ICourse) {
    // TODO: update course
  }

  delete(courseId: number) {
    // TODO: delete course
  }
}
