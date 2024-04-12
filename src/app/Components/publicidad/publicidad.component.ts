import { Component, OnInit } from '@angular/core';
import { ChuckNorrisService } from 'src/app/Services/chuckNorris/chuck-norris.service';

@Component({
  selector: 'app-publicidad',
  templateUrl: './publicidad.component.html',
  styleUrls: ['./publicidad.component.css']
})
export class PublicidadComponent implements OnInit {

  chiste: string = '';

  constructor(private chuckNorrisService: ChuckNorrisService) { }

  ngOnInit(): void {
    this.obtenerChisteAleatorio();
  }

  obtenerChisteAleatorio() {
    this.chuckNorrisService.getRandomJoke().subscribe(
      (data) => {
        this.chiste = data.value;
      }
    );
  }

}
