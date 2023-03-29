import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  name: string = 'Mi Banner';
  urlImg: string = 'https://martinantolini.com.ar/wp-content/uploads/2022/05/Logo-completo-2.png'
  photo: string = `url('${this.urlImg}')`;
}
