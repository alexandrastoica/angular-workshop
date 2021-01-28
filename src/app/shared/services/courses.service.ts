import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:3000/';

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
  private model = 'courses';
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

  constructor(private http: HttpClient) { }

  all(): Observable<ICourse[]> {
    return this.http.get<ICourse[]>(this.getUrl);
  }

  find(courseId: number) {
    return this.http.get(this.getUrlById(courseId));
  }

  create(course: ICourse): Observable<ICourse> {
    return this.http.post<ICourse>(this.getUrl, course);
  }

  update(course: ICourse): Observable<ICourse> {
   return this.http.put<ICourse>(this.getUrlById(course.id), course);
  }

  delete(courseId: number) {
    return this.http.delete(this.getUrlById(courseId));
  }

  private get getUrl() {
    return `${BASE_URL}${this.model}`;
  }

  private getUrlById(id: number) {
    return `${this.getUrl}/${id}`;
  }
}
