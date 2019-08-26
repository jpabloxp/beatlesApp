import { Component, OnInit, ViewChild } from '@angular/core';
import { AlbumbarComponent } from '../albumbar/albumbar.component';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  private testText: string;


  constructor() {
  }

  ngOnInit() {
    this.testText = "THIS IS ALBUMINFO";
  }

  receiveMessage($event) {
    this.testText = $event;
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
