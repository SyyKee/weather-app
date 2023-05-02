import { AfterViewChecked, AfterViewInit, Component, ViewChild , OnChanges,OnInit} from '@angular/core';
import { ListComponent } from './list/list.component';
import { ApiService } from './service/api.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  AfterViewInit{
  

  @ViewChild(ListComponent)
  private list: ListComponent
  constructor(private api:ApiService){}
  temp:any
  l_temp:any
  h_temp:any
  conditon:any
  location:any
  country:any
  ngAfterViewInit(): void {

    this.getTemp("morocco")
    this.list.getTempL("morocco")
  }

  ngOnChanges(): void {
  }

  getTemp(region:string){
    this.api.get(region).subscribe((data) => {
      this.temp = data.forecast.forecastday[0].day.avgtemp_c 
      this.l_temp = data.forecast.forecastday[0].day.mintemp_c
      this.h_temp = data.forecast.forecastday[0].day.maxtemp_c 
      this.conditon = data.current.condition.text
      this.location = data.location.country
      })
    }

    onSubmit(f: NgForm){
      this.getTemp(f.value.country)
      this.country = f.value.country
      this.list.getTempL(this.country)
    }
 

}
