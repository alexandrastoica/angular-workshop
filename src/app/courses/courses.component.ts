import { Icu } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';

interface ICourse {
  id: number;
  title: string;
  description: string;
  percentComplete: number;
  favorite: boolean;
}

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  selectedCourse: ICourse = null;
  courses: ICourse[] = [
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

  ngOnInit(): void {
    this.resetSelectedCourse();
  }

  resetSelectedCourse(): void {
    const emptyCourse: ICourse = {
      id: null,
      title: '',
      description: '',
      percentComplete: 0,
      favorite: false
    };

    this.selectedCourse = emptyCourse;
  }

  selectCourse(course: ICourse): void {
    this.selectedCourse = course;
  }

  deleteCourse(id: number): void {
    // TODO: delete course
  }

  saveCourse(data) {
    console.log('submit');
    console.log(data);
  }

  cancelForm(): void {
    this.resetSelectedCourse();
  }

}
