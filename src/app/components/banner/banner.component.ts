import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  name: string = 'imagen representativa del baner';
  urlImg: string = 'http://www.sanmartindelosandes.gov.ar/imgs/enc/pri_6.jpg';
  photo: string = `url('${this.urlImg}')`;
}
