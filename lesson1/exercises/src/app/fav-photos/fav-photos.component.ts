import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Photo/Image Section Title Here';
  image1 = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';
  image2 = 'https://cdn.britannica.com/42/58842-004-AE00F3AF/Mandarin-duck-Asian-perching.jpg';
  image3 = 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Glazed-Donut.jpg'

  constructor() { }

  ngOnInit() {
  }

}