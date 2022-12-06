import { ViewContainerRef } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'hin-root',
  templateUrl: './app.component.html',
  //template : '<h1>Hello World</h1>',
  //<P>hgf</P>`,
  styleUrls: ['./app.component.scss']
  //styles :['h1 {color :red;}']
})
export class AppComponent implements OnInit{
  title = 'hotelinventory';
  role = 'Userdghfdgh';
  @ViewChild('name',{static:true}) name!:ElementRef;
  ngOnInit():void{
    this.name.nativeElement.innerText = "Training";
  }
  //@ViewChild('user',{read: ViewContainerRef})ver!: ViewContainerRef;
  //ngAfterViewInit(){
    //const componentRef =this.ver.createComponent(RoomsComponent);
  //}
}
