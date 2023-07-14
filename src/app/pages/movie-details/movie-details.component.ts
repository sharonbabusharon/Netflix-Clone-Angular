import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit{


  constructor(private api:ApiService, private router:ActivatedRoute){}

  movieDetails:any
  getMovieVides:any
  getMovieCasts:any


  ngOnInit(): void {
    let getParamId=this.router.snapshot.paramMap.get('id');
    console.log(getParamId);
    
    this.getMovie(getParamId)
    this.getMovieVideo(getParamId)
    this.getMovieCast(getParamId)
  }

  getMovie(id:any){
    this.api.getMovie(id).subscribe((result)=>{
      console.log(result);
      this.movieDetails=result
      
      
    })
  }

  getMovieVideo(id:any)
  {
    this.api.getMovieVideo(id).subscribe((result)=>{
      console.log(result);
      result.results.forEach((element:any)=>{
          if(element.type=='Trailer')
          {
            this.getMovieVides=element.key
          }
      })
   
    })
  }

  getMovieCast(id:any)
  {
    this.api.getMovieCast(id).subscribe((result)=>{
      console.log(result);
      this.getMovieCasts=result.cast
    })
  }

}
