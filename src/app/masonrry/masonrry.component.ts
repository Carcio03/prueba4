import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-masonrry',
  templateUrl: './masonrry.component.html',
  styleUrls: ['./masonrry.component.css']
})
export class MasonrryComponent {
  images = [
    { src: 'https://cadenaser.com/resizer/NjNfvshuscr881IQOV72sWQlpx4=/736x414/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/prisaradio/ETAKV32AENNAVB7RZSI3SWEPZ4.jpg', cols: 3, rows: 1 },
    { src: 'https://www.yavas.com/images/upload/EM_hoteles/LosCabos-hotel-barato.jpg', cols: 4, rows: 1 },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9rUqAqEVw5C9QWcuPCbvubkTFsIvRkTRMlBeF10v6V2g1ftJ4wlYAlytrtEdZCe-NUNw&usqp=CAU', cols: 3, rows: 1 },
    { src: 'https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen,f_auto,h_248,q_auto,w_481/itemimages/19/74/19744488.jpeg', cols: 2, rows: 1 },
    { src: 'https://content.r9cdn.net/rimg/himg/4a/7b/31/leonardo-1104354-Sunset_Na_Balam_S-383270.jpg', cols: 1, rows: 1 },
    { src: 'https://www.momondo.mx/himg/2b/ff/76/leonardo-3501774-153685733-873143.jpg', cols: 3, rows: 2 },
    { src: 'https://www.momondo.es/himg/35/47/5b/ice-142910-72450759_3XL-709180.jpg', cols: 2, rows: 2 },
    { src: 'https://static.barcelo.com/content/dam/bhg/master/es/hoteles/spain/canarias/gran-canaria/occidental-margaritas/main-photos/hotel/BMAR_POOL_05.jpg', cols: 1, rows: 2 },
    { src: 'https://neextt.com/wp-content/uploads/2021/02/nuevos-hoteles-abriran-mexico-2021-1.jpg', cols: 2, rows: 3 },
    { src: 'https://media.admagazine.com/photos/628e814d2ca77e057b9403c8/16:9/pass/Mujer%20en%20resort.jpg', cols: 1, rows: 3 }
  ];
}
