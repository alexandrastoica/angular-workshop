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
    this.loadCourses();
  }

  loadCourses(): void {
    this.coursesServices.all()
      .subscribe(courses => this.courses = courses);
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

  refreshCourses(): void {
    this.resetSelectedCourse();
    this.loadCourses();
  }

  selectCourse(course: ICourse): void {
    this.selectedCourse = course;
  }

  deleteCourse(courseId: number): void {
    this.coursesServices.delete(courseId)
      .subscribe(() => this.refreshCourses());
  }

  saveCourse(courseData: ICourse) {
    if (courseData.id) {
      this.coursesServices.update(courseData)
        .subscribe(() => this.refreshCourses());
    } else {
      this.coursesServices.create(courseData)
        .subscribe(() => this.refreshCourses());
    }
  }

  clearForm(): void {
    this.resetSelectedCourse();
  }

}
