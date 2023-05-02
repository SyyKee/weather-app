import { Component , AfterViewInit, Input } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Observable, elementAt } from 'rxjs';
import { Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-list-sub',
  templateUrl: './list-sub.component.html',
  styleUrls: ['./list-sub.component.css']
})
export class ListSubComponent   {
 
  @Input() dateName:any
  @Input() dateAbbr:any
  @Input() temp:any
  @Input() condition:any

}