
import { ChangeDetectionStrategy,Component,EventEmitter,Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { RoomList} from '../rooms/rooms';

@Component({
  selector: 'hin-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit ,OnChanges{
  
  @Input() rooms:RoomList[] = [];
  @Input() title = "RoomList";
  @Output() selectedRoom = new EventEmitter<RoomList>();

  constructor() { }

  ngOnInit(): void {
  }
  selectRoom(room : RoomList){
    this.selectedRoom.emit(room);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.title);
    if(changes['title']){
      this.title = changes['title'].currentValue.toUpperCase();
    }
  }

}
