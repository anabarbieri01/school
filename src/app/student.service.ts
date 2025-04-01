import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  apiUrl = "http://localhost:3000/student";

  constructor() { }

  getStudents() : Observable<Studant[]{
    return class
  }
}
