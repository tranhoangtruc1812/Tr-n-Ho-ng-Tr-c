import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-chitietsp',
  templateUrl: './chitietsp.component.html',
  styleUrls: ['./chitietsp.component.css']
})
export class ChitietspComponent implements OnInit {
  id;
  array = []
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => { 
      this.id = params.get('id');
      this.array=[];
      this.sanpham.forEach(sp =>{
        if(sp.Id === this.id)
           this.array.push(sp);
      })
     }); 
  }
  sanpham = [
    {Id:1011,name:"SSW-1", code:"001",img:"1011.jpg"},
    {Id:1012,name:"SSW-2", code:"001",img:"1012.jpg"},
    {Id:1031,name:"SSW-3", code:"001",img:"1031.jpg"},
    {Id:1003,name:"laptop-1", code:"002",img:"1003.jpg"},
    {Id:1004,name:"laptop-2", code:"002",img:"1004.jpg"},
    {Id:1006,name:"laptop-2", code:"002",img:"1006.png"},
    ]

}
