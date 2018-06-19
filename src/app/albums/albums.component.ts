import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
    
  albums: Object;
  constructor(private data : DataService) { }

  ngOnInit() {
      this.data.getAlbums().subscribe(
          data => this.albums = data 
      );
  }

}
