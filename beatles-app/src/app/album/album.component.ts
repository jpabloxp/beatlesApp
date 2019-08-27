import { Component, OnInit, ViewChild } from '@angular/core';
import { AlbumbarComponent } from '../albumbar/albumbar.component';
import { Album, AlbumService } from '../album.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  private testText: string;
  private _albums: Album[];
  private _focusedAlbum: Album;
  private _albumNames: string[] = [];

  constructor(private AlbumService: AlbumService) {
    AlbumService.getAlbums().subscribe( (albums) => {
      this._albums = albums;
      //console.log(this._albums);

      this.listAlbumNames(this._albums);

    });

  }

  listAlbumNames(_albums: Album[]) {
    for (let album of this._albums) {
      this._albumNames.push(album.name);
    }
  }

  ngOnInit() {
    this.testText = 'THIS IS ALBUMINFO';
  }

  receiveMessage($event) {
    this.testText = $event;
    this.copyAlbumObject();
  }

  copyAlbumObject(){

    for (let album of this._albums) {
      if(album.name == this.testText){
        this._focusedAlbum = album;
        break;
      }
    }
  }

/*
    @ViewChild(AlbumbarComponent, {static: false}) albumbar: AlbumbarComponent;
    ngAfterViewInit() {
    console.log(this.testText);
    setTimeout(() => {
      if(this.albumbar._selectedAlbum != null) this.testText = this.albumbar._selectedAlbum;
    });
  }
*/

}
