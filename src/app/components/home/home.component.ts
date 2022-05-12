import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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
  @Input() indicators = true;
  @Input() controls = true;
  @Input() autoSlide = true;
  @Input() slideInterval = 2500;


  selectedIndex = 0;

  constructor() { }

  ngOnInit(): void {
    if(this.autoSlide){
      this.autoSlideImages();
    };
  }

  // Cambia slide en cada 3 segundos
  autoSlideImages(){
    setInterval(()=> {
        this.onNextClick();
    }, this.slideInterval);
  }

  selectImage(index:any) {
    this.selectedIndex = index;

  };

  onPrevClick(){
    if(this.selectedIndex === 0) {
      this.selectedIndex = this.images.length -1;
    }
    else {
      this.selectedIndex--;
    }
  };

  onNextClick(){
    if (this.selectedIndex === this.images.length -1) {
      this.selectedIndex = 0;
    }else {
      this.selectedIndex++;
    }
  }


}
