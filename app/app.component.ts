import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'design';
  chungloai= [
    {code: "001", name: "điện thoại di động"},
    {code: "002", name: "máy tính để bàn"},
    {code: "003", name: "máy tính sách tay"},
    {code: "004", name: "Quạt máy"},
    {code: "005", name: "Tivi"},
    {code: "006", name: "Tủ lạnh"},
    ]
}
