import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor( private api:ApiService, private http:HttpClient){}

  bannerResult:any=[]
  trendingResults:any=[]
  actionMoviesDetails:any=[]
  animationMoviesDetails:any=[]
  adventureMoviesDeatils:any=[]
  comedyMoviesDetails:any=[]
  scienceMoviesDeatils:any=[]
  documentaryMoviesDetails:any=[]
  thrillersMoviesDeatails:any=[]

  ngOnInit(): void {
    
this.bannerdata();
this.trendingMovies();
this.actionMovies();
this.animationMovies();
this.adventureMovies();
this.comedyMovies();
this.scienceMovies();
this.documentaryMovies();
this.thrillersMovies();


  }

  bannerdata()
  {
    this.api.bannerApiData().subscribe((result)=>{
      console.log(result,'bannerresults#');
      this.bannerResult=result.results
      
    })
  }
    
  trendingMovies()
  {
    this.api.trendingMovies().subscribe((result)=>{
      console.log(result,'trendingresult#');
      this.trendingResults=result.results
      
    })
  }

  actionMovies()
  {
    this.api.actionMovies().subscribe((result)=>{
      console.log(result,'actionresult#');
      this.actionMoviesDetails=result.results
    })
  }

  // adventureMovies()
  // {
  //   this.api.adventureMovies().subscribe((result)=>{
  //     console.log(result,'adventureresult#');
  //     this.adventureMoviesDeatils=result.results
  //   })
  // }

  adventureMovies()
  {
    this.api.adventureMovies().subscribe((result)=>{
      this.adventureMoviesDeatils=result.results
    })
  }



  animationMovies()
  {
    this.api.animationMovies().subscribe((result)=>{
      this.animationMoviesDetails=result.results
    })
  }

  comedyMovies()
  {
    this.api.comedyMovies().subscribe((result)=>{
      this.comedyMoviesDetails=result.results
    })
  }

  scienceMovies()
  {
    this.api.scienceMovies().subscribe((result)=>{
      this. scienceMoviesDeatils=result.results
    })
  }

  documentaryMovies()
  {
    this.api.documentaryMovies().subscribe((result)=>{
      this.documentaryMoviesDetails=result.results
    })
  }

  thrillersMovies()
  {
    this.api.thrillersMovies().subscribe((result)=>{
      this.thrillersMoviesDeatails=result.results
    })
  }

}