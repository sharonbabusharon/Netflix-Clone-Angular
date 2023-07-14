import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms'
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  constructor(private api:ApiService){}

  ngOnInit(): void {
   
  }
searchResult:any=[]
searchForm=new FormGroup({
  'movieName':new FormControl(null)
})

submitForm()
{
  console.log(this.searchForm.value);
  this.api.searchMovie(this.searchForm.value).subscribe((result)=>{
   
    console.log(result,'searchMovie#');
    this.searchResult=result.results;
  })
}



}
