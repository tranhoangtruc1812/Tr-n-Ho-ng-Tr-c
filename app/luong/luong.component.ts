import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-luong',
  templateUrl: './luong.component.html',
  styleUrls: ['./luong.component.css']
})
export class LuongComponent implements OnInit {
work ={
  name: null,
  gender: 'Nữ',
  luong: null,
  rate:null
} 

  constructor() { }

  ngOnInit() {
  }
  list = [
    {
      age: 'dưới 25 tuổi',
      rate: 0.07
    },
    {
      age: 'từ 25 đến 40 tuổi',
      rate: 0.1
    },
    {
      age: 'trên 40 tuổi',
      rate: 0.15  
    }
  ]
  tienthuong(){
    let luong =  this.work.rate * this.work.luong 
    if(this.work.gender === 'Nữ')
    luong += 200000;
    return luong
  }

}
