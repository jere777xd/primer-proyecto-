import { Component } from '@angular/core';

//IMPORTAMOS INTERFAZ
import { Vehiculos } from 'src/app/models/vehiculos';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  //PROPIEDAD PUBLICA (TIPO: ARRAY)
  public info: Vehiculos[];

  constructor(){
    this.info = [
      {
        uid:"",
        marca:"volkswagen",
        modelo:"golf GTI",
        year:2023,
        precio:35000000,
        imagen:"https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_large/v1/editorial/segment_review/hero_image/2023-Volkswagen-Golf-GTI-Hatchback-White-M4-1001x56-%281%29.jpg"
      },
      {
        uid:"",
        marca:"toyota",
        modelo:"corolla",
        year:2022,
        precio:25000000,
        imagen:"https://media.airedesantafe.com.ar/p/a586523b7a0a10c2e59e71a6e351d60a/adjuntos/268/imagenes/003/498/0003498823/toyota-corolla-2022.jpg"
      },
      {
        uid:"",
        marca:"yamaha",
        modelo:"mt09",
        year: 2020,
        precio: 14000,
        imagen:"https://http2.mlstatic.com/D_NQ_NP_849409-MLA75147887184_032024-O.webp"
      }
    ]
  }

}
