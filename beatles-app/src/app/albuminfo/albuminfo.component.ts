import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-albuminfo',
  templateUrl: './albuminfo.component.html',
  styleUrls: ['./albuminfo.component.css']
})
export class AlbuminfoComponent implements OnInit {

  private testText;

  constructor() { }

  ngOnInit() {
    this.testText = "THIS IS ALBUMINFO";
  }

  showAlbum(someText){
    this.testText = someText;
  }

}
