import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // f2abf3bb22464f4a097092cd3378e1b2

  constructor(private http:HttpClient ) { }

  BASEURL= "https://api.themoviedb.org/3";
  apikey= "f2abf3bb22464f4a097092cd3378e1b2";

bannerApiData():Observable<any>
{
  return this.http.get(`${this.BASEURL}/trending/all/week?api_key=${this.apikey}`)
}

trendingMovies():Observable<any>{
  return this.http.get(`${this.BASEURL}/trending/movie/day?api_key=${this.apikey}`)
}

searchMovie(data:any):Observable<any>
{
  return this.http.get(`${this.BASEURL}/search/movie?api_key=${this.apikey}&query=${data.movieName}`)
}

getMovie(data:any):Observable<any>
{
  return this.http.get(`${this.BASEURL}/movie/${data}?api_key=${this.apikey}`)
}

getMovieVideo(data:any):Observable<any>
{
  return this.http.get(`${this.BASEURL}/movie/${data}/videos?api_key=${this.apikey}`)
}

getMovieCast(data:any):Observable<any>
{
  return this.http.get(`${this.BASEURL}/movie/${data}/credits?api_key=${this.apikey}`)
}



actionMovies():Observable<any>{
  return this.http.get(`${this.BASEURL}/discover/movie?api_key=${this.apikey}&with_genres=28`)
}

adventureMovies():Observable<any>{
  return this.http.get(`${this.BASEURL}/discover/movie?api_key=${this.apikey}&with_genres=12}`)

}

animationMovies():Observable<any>{
  return this.http.get(`${this.BASEURL}/discover/movie?api_key=${this.apikey}&with_genres=35`)

}

comedyMovies():Observable<any>{
  return this.http.get(`${this.BASEURL}/discover/movie?api_key=${this.apikey}&with_genres=&{this.with_genres=35}`)

}

documentaryMovies():Observable<any>{
  return this.http.get(`${this.BASEURL}/discover/movie?api_key=${this.apikey}&with_genres=&{this.with_genres=99}`)

}

scienceMovies():Observable<any>{
  return this.http.get(`${this.BASEURL}/discover/movie?api_key=${this.apikey}&with_genres=&{this.with_genres=878}`)

}

thrillersMovies():Observable<any>{
  return this.http.get(`${this.BASEURL}/discover/movie?api_key=${this.apikey}&with_genres=&{this.with_genres=53}`)

}

}
