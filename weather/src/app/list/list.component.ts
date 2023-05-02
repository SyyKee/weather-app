import { AfterViewInit, Component, EventEmitter, OnInit, Input, OnChanges } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  constructor(private api:ApiService){}
  

  date:string[]=[]
  temp: string[] = []
  dateName:string[]=[]
  dateAbbr:string[]=[]
  condition:string[]=[]
  dataObject:any= {}
  dataTable:any[] =[]
  @Input() country:string


 
  getTempL(region:string){
    this.dateName = [];
    this.dateAbbr = [];
    this.temp = [];
    this.condition = [];
    this.date = [];
    this.api.get(region).subscribe((data) => {
      console.log(data);

     data.forecast.forecastday.forEach((element:any)=>{
        this.date.push(element.date)})

         for(let i = 0 ; i<6 ;i++){
          let date =new Date(this.date[i])
            this.dateName.push(date.toLocaleString('en-US',{ weekday: 'long' }))
            this.dateAbbr.push(date.toLocaleString('en-UK',{ day:'numeric' ,month:'numeric'}))
          }

         data.forecast.forecastday.forEach((element:any)=>{
          this.temp.push(element.day.avgtemp_c)
          this.condition.push(element.day.condition.text)
          })
        if(this.dataTable.length > 0){
          this.dataTable = []
          console.log(this.dataTable[1])
          this.generateObject()
        }else{
          console.log(this.dataTable[1])
        this.generateObject()
        }
      })

      
    }

    generateObject(){
      this.dataObject = [];
      for(let i = 0; i< 5 ;i++){
        this.dataTable.push({
          dateName : this.dateName[i],
          date : this.date[i],
          temp : this.temp[i],
          dateAbbr: this.dateAbbr[i],
          condition: this.condition[i]
        });
       
       //this.dataTable[i] =this.dataObject[i]
      }
      
      console.log(this.dataTable);
    }
  
    generateObject2(){
      
      for(let i = 1; i< 6 ;i++){
        this.dataObject[i] = {
          dateName : this.dateName[i],
          date : this.date[i],
          temp : this.temp[i],
          dateAbbr: this.dateAbbr[i],
          condition: this.condition[i]
        }
        this.dataTable[i] =this.dataObject[i]
      }
      console.log(this.dataTable)
    }
  

}
