import { Component, OnInit } from '@angular/core';
import { MemoService } from 'src/app/services/memo.service';

@Component({
  selector: 'app-show-carta-component',
  templateUrl: './show-carta-component.component.html',
  styleUrls: ['./show-carta-component.component.css']
})
export class ShowCartaComponentComponent implements OnInit {

  ditribucion_cartas = [];
  estado = [];

  constructor(private servicio : MemoService) { }

  ngOnInit(): void {
    this.ditribucion_cartas = this.servicio.getRandomDistribution()
  }
  actualizaEstado(numImage){
    if(this.estado.length == 2){
      this.estado = [];
    } else {
      // Truco del almendruco. Debido a que angular en el evento onChanges
      // no detecta cambios que se produzcan en un array (añadir o quitar elementos),
      // hay que reasignar el array completo.
      // Por eso se crea una copia temporal del array de estados y se
      // reasigna. 
      let _estado = JSON.parse(JSON.stringify(this.estado))
      this.estado = _estado
    }

    this.estado.push(numImage);
  }
}
