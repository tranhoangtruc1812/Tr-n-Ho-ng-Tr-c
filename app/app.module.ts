import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { TrangsanphamComponent } from './trangsanpham/trangsanpham.component';
import { ChitietspComponent } from './chitietsp/chitietsp.component';
import { HinhchunhatComponent } from './hinhchunhat/hinhchunhat.component';
import { FormsModule} from '@angular/forms';
import { SinhvienComponent } from './sinhvien/sinhvien.component';
import { LuongComponent } from './luong/luong.component';
import { BanhangComponent } from './banhang/banhang.component'

@NgModule({
  declarations: [
    AppComponent,
    TrangchuComponent,
    TrangsanphamComponent,
    ChitietspComponent,
    HinhchunhatComponent,
    SinhvienComponent,
    LuongComponent,
    BanhangComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'', component:TrangchuComponent},
      {path:'loai/:code', component:TrangsanphamComponent},
      {path:'loai/:code/:id', component:ChitietspComponent},
      {path:'**',redirectTo: 'home', pathMatch: 'full' },
      {path:'hcn', component:HinhchunhatComponent },
      {path:'sinhvien', component: SinhvienComponent},
      {path:'luong', component: LuongComponent},
      {path:'banhang', component: BanhangComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
