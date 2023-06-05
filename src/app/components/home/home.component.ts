import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  data = [];
  filter: string = "";
  input: string = "";

  getData = (data: any) => {
    this.data = data;
  }

  getFilter = (filter: string) => {
    this.filter = filter;
  }

  setInput = (input: string) =>{
    this.input = input;
  }

}
