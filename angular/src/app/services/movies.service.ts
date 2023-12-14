import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class MoviesService {
  private grailsUrl = 'http://localhost:8080/grails.qst.movies/';

  constructor(private http: HttpClient) {}

  getMovies(): Observable<any[]> {
      return this.http.get<any[]>(`${this.grailsUrl}movies/getMovies`);
  }
}
