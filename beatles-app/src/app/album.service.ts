import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

export interface Album{

  _id?: string;
  titre: string;
  year: string;
}

@Injectable({
  providedIn: 'root'
})

export class AlbumService {

  private apiURL = environment.apiURL;

  constructor(private http: HttpClient, private router: Router){}

  // Get all Album
  getAlbums(): Observable<Album[]> {

    const albumListUrl = environment.apiURL + "/album";

    return this.http.get<Album[]>(albumListUrl);
  }

  // Get a single Album
  getOneAlbum(id: string): Observable<Album> {
    const getUrl = `${this.apiURL}/test/${id}`;
    console.log(getUrl);
    return this.http.get<Album>(getUrl);
  }

  addAlbum(album: Album) {

    console.log('in service  ', album);

    const addUrl = `${this.apiURL}/add`;
    return this.http.post<Album>(addUrl, album);
  }
  
}
