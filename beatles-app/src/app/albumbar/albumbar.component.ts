import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Album, AlbumService } from '../album.service';
import { AlbuminfoComponent } from '../albuminfo/albuminfo.component';

@Component({
  selector: 'app-albumbar',
  templateUrl: './albumbar.component.html',
  styleUrls: ['./albumbar.component.css']
})
export class AlbumbarComponent implements OnInit {

  fillerNav = Array.from({length: 18}, (_, i) => `Nav Item ${i + 1}`);

  public _selectedAlbum: string;

  @Input() albumNames: string[];
  @Output() messageEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {
  }

  selectecAlbum(selectedAlbum: string){
    this._selectedAlbum = selectedAlbum;
    this.messageEvent.emit(this._selectedAlbum);
  }

}
