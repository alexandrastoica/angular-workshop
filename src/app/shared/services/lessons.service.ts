import { Injectable } from '@angular/core';

export interface ILesson {
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class LessonsService {
  private courseLessons: ILesson[] = [
    { title: 'Hello Angular' },
    { title: 'Component Fundamentals' },
    { title: 'Template Driven Forms' },
    { title: 'Angular Services' },
    { title: 'Server Communication' },
    { title: 'Component Driven Architecture' },
    { title: 'Angular Routing' },
    { title: 'Unit Testing Fundamentals' },
  ];

  constructor() { }

  all(): ILesson[] {
    return this.courseLessons;
  }
}
