import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ICourse } from '../../shared/services/courses.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent {
  @Input() courses: ICourse[] = null;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
