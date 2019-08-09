import { Component, OnInit, Input } from '@angular/core';
import { Album, AlbumService } from '../album.service';

@Component({
  selector: 'app-albumbar',
  templateUrl: './albumbar.component.html',
  styleUrls: ['./albumbar.component.css']
})
export class AlbumbarComponent implements OnInit {

  fillerNav = Array.from({length: 18}, (_, i) => `Nav Item ${i + 1}`);

  @Input() smoothie;
  private _albums: Album[];

  private _name;
  private _year;

  constructor(private AlbumService: AlbumService) {
    AlbumService.getAlbums().subscribe( (albums) => {
      this._albums = albums;
      console.log(this._albums);
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

}
