import { Component, OnInit } from '@angular/core';
import { CoursesService, ICourse } from '../shared/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  selectedCourse: ICourse = null;
  courses: ICourse[] = null;

  constructor(private coursesServices: CoursesService) { }

  ngOnInit(): void {
    this.resetSelectedCourse();
    this.courses = this.coursesServices.all();
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

  deleteCourse(courseId: number): void {
    this.coursesServices.delete(courseId);
  }

  saveCourse(courseData: ICourse) {
    if (courseData.id) {
      this.coursesServices.update(courseData);
    } else {
      this.coursesServices.create(courseData);
    }
  }

  cancelForm(): void {
    this.resetSelectedCourse();
  }

}
