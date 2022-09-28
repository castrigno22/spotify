import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'  
})
export class SpotifyService {
   //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQArY8_b1Q9RZmbaRSIw0EORrWKzZS7Eg7xYHggtQMaI_tAVbCOo0EI4PXfNEjVGeMpupkTLae7okcVEojskLGVXYzcuQ3nEUDjI-qvQlm_WODOBilCAnw9HXOEHfdFU18SAhnRWvtWf2g3lSr0t2Cu4xpVqUVWIIJX_2rqV13JBLyvMZJdEyLX4v7dPcQU5uuY'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}