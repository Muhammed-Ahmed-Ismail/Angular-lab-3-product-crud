import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day3';
  check:number=3 ;
  slug:string="iti-roure";
  names:string[]=["Ahmed","ali","muhammed","fsfs","sfor"];
  needle:string='';
}
