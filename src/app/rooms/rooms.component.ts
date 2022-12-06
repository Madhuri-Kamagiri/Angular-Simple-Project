import { ViewChildren } from '@angular/core';
import { QueryList } from '@angular/core';
import { ChangeDetectionStrategy, Component, DoCheck, AfterViewInit ,ViewChild, OnInit, AfterViewChecked } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import {Room,RoomList} from './rooms';
@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
  
})
export class RoomsComponent implements OnInit ,DoCheck ,AfterViewInit ,AfterViewChecked{
  hotelName !: string;
  roomList : RoomList[]=[];
  @ViewChild(HeaderComponent) headerComponent !: HeaderComponent;
  @ViewChildren(HeaderComponent) headerChilderComponent !: QueryList<HeaderComponent>;
  constructor() {this.hotelName = 'seven hills'; }
  noOfRooms =150;
  hideRooms = false;
  title = 'room list'
  
  toggle(){
    this.hideRooms = !this.hideRooms;
    this.title = 'rooms list'
  } 
  rooms : Room = {
   totalRooms : 300,
    availableRooms : 10,
    bookedRooms : 5,
    
  };
  ngOnInit(): void {
    console.log(this.headerComponent);
  this.roomList = [
    {
      roomNumber:10,
    roomType : 'Deluxe Room',
    amenities : 'ac ,Free wifi',
    price : 5000,
    photos : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fnature%2F&psig=AOvVaw3_MH1DjUCBDI-VBzqh4m73&ust=1668676509864000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCPjg9sWusvsCFQAAAAAdAAAAABAE',
    checkinTime : new Date('11-Nov-2021'),
    checkoutTime : new Date('01-Dec-2021'),
    rating : 2.6,
    },
    {
      roomNumber:20,
       roomType : 'Deluxe Room',
       amenities : 'Ac ,Free wifi ,cool water ,swimming pool',
       price : 10000,
       photos : 'https://unsplash.com/photos/sschgbKJJwo',
       checkinTime : new Date('12-Nov-2021'),
       checkoutTime : new Date('15-Nov-2021'),
       rating : 4.3,
    },
    {
      roomNumber:1,
      roomType : 'private Room',
      amenities : 'Drinking water ,Food',
      price : 500,
      photos : 'https://unsplash.com/photos/sschgbKJJwo',
      checkinTime : new Date('01-Jan-2021'),
      checkoutTime : new Date('30-Jan-2021'),
      rating : 5, 
    }
  ];
  }
  ngAfterViewChecked():void{
    

  }
  selectRoom(room:RoomList){
    console.log(room);
  }
  addRoom(){
    const newRoom : RoomList={
    roomNumber : 5,
    roomType : 'luxery',
    amenities:'rest room ,water,laundry',
    price :5000,
    photos :'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fnature%2F&psig=AOvVaw3_MH1DjUCBDI-VBzqh4m73&ust=1668676509864000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCPjg9sWusvsCFQAAAAAdAAAAABAE',
    checkinTime : new Date('11-nov-2021'),
    checkoutTime : new Date('11-nov-2021'),
    rating : 4.6,
    };
this.roomList=[...this.roomList,newRoom];
  } 
  ngDoCheck(): void {
    console.log('docheck  is called');
  }
  ngAfterViewInit(): void {
    this.headerComponent.title = "Rooms View";
    console.log(this.headerChilderComponent.last.title="Last title");
    this.headerChilderComponent.get 
  }
  
}
