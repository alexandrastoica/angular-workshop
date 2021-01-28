import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ICourse } from '../../shared/services/courses.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent {
  selectedCourse: ICourse = null;
  originalTitle = '';

  @Output() clear = new EventEmitter();
  @Output() save = new EventEmitter();

  @Input() set course(value: ICourse) {
    if (value) {
      this.selectedCourse = {...value};
      this.originalTitle = value.title;
    }
  }
}
