import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private searchValue:string = '';

  constructor() { }

  set value(value:string){
    this.searchValue = value;
  }

  get value():string{
    return this.searchValue;
  }





}
