import { Component, Input } from '@angular/core';
import { ILesson } from '../../shared/services/lessons.service';

@Component({
  selector: 'app-lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.scss']
})
export class LessonsListComponent {
  @Input() courseLessons: ILesson[] = null;
}
