import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Carlos Cortéz ';

  images = [
    {
      imageSrc: "assets/img/diseño1.png",
      imageAlt: 'design1',
      imageTitle: 'Titulo1',
      imageInfo: 'parrafo1'
    },
    {
      imageSrc: 'assets/img/diseño2.png',
      imageAlt: 'design2',
      imageTitle: 'Titulo2',
      imageInfo: 'parrafo2'
    },
    {
      imageSrc: 'assets/img/diseño3.png',
      imageAlt: 'design3',
      imageTitle: 'Titulo3',
      imageInfo: 'parrafo3'
    }
  ]

}


