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


  private _albums: Album[];
  private _name: string;
  private _year: string;
  public _selectedAlbum: string;

  @Output() messageEvent = new EventEmitter<string>();

  //constructor() {}
 
  constructor(private AlbumService: AlbumService) {
    AlbumService.getAlbums().subscribe( (albums) => {
      this._albums = albums;
    });

  }

  ngOnInit() {
  }


  get name() {
    return this._name;
  }

  get year() {
    return this._year;
  }

  get albums(): any{
    return this._albums;
  }

  selectecAlbum(selectedAlbum: string){
    this._selectedAlbum = selectedAlbum;
    this.messageEvent.emit(this._selectedAlbum);
  }

}
