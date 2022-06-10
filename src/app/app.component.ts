import { Component } from '@angular/core';
import { ITempoAtual } from './interfaces';
import { catchError, Observable, retry, tap, throwError } from 'rxjs';
import { TempoService } from './modulos/tempo/tempo/tempo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tempoAtual!: ITempoAtual
  constructor(private tempoService: TempoService) {
    let coordenadas: GeolocationCoordinates
    this.getCurrentLocation().pipe().subscribe(data => {
      coordenadas = data
      this.tempoService.getCurrentWeatherByCoords({ latitude: coordenadas.latitude, longitude: coordenadas.longitude }).subscribe(novoTempo => this.tempoAtual = novoTempo)
    })
  }

  getCurrentLocation(): Observable<GeolocationCoordinates> {
    return new Observable<GeolocationCoordinates>((observer) => {
      window.navigator.geolocation.getCurrentPosition(
        (position) => {
          observer.next(position.coords);
          observer.complete();
        },
        (error) =>  alert(`ERROR(${error.code}): ${'porque voce fez isso eim? sabe o trabalho que da faze isso pra voce clica em nao'}`)
      );
    }).pipe(
      retry(1),
      tap(data => console.log(data)),
      catchError((error) => {
        return throwError(error);
      })
    )
  }
}
