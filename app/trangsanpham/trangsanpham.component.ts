import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from  '@angular/router'

@Component({
  selector: 'app-trangsanpham',
  templateUrl: './trangsanpham.component.html',
  styleUrls: ['./trangsanpham.component.css']
})
export class TrangsanphamComponent implements OnInit {
  code;
  array =[];
  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => { 
      this.code = params.get('code')
     }); 
     this.array = [];
     this.sanpham.forEach(sp =>{
       if(sp.code === this.code)
          this.array.push(sp);
     })
    
  }
  chungloai= [
    {code: "001", name: "điện thoại di động"},
    {code: "002", name: "máy tính sách tay"},
    {code: "003", name: "máy tính để bàn"},
    {code: "004", name: "Quạt máy"},
    {code: "005", name: "Tivi"},
    {code: "006", name: "Tủ lạnh"},
    ]
    sanpham = [
    {Id:1011,name:"SSW-1", code:"001",img:"1011.jpg"},
    {Id:1012,name:"SSW-2", code:"001",img:"1012.jpg"},
    {Id:1031,name:"SSW-3", code:"001",img:"1031.jpg"},
    {Id:1003,name:"laptop-1", code:"002",img:"1003.jpg"},
    {Id:1004,name:"laptop-2", code:"002",img:"1004.jpg"},
    {Id:1006,name:"laptop-2", code:"002",img:"1006.png"},
    ]
    

}
