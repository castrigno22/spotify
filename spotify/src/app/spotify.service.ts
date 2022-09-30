import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment'

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
    const headers = new HttpHeaders({Authorization:'Bearer BQBOXdlspr-aCPOKpqDErfXXHNwpHhVxThiSNRZemquRZXbvIO6PUjWW6d-f0eQ9V3BjR7RrwRCd6hM7WWK39XQje2Ny0cx0uLDY-AbWvuEe5-0NRJp9qijdS1oTwfFfrNKQZ8ND4YyIgf2Jt-0ACMltvV5noQF5qdcRmdiVdpJVe0fOjnlRA0Pp9czp_EDwOOs'
      
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
  getTrack(id: string) {
    const url = `https://api.spotify.com/v1/tracks/${id}`;
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQBOXdlspr-aCPOKpqDErfXXHNwpHhVxThiSNRZemquRZXbvIO6PUjWW6d-f0eQ9V3BjR7RrwRCd6hM7WWK39XQje2Ny0cx0uLDY-AbWvuEe5-0NRJp9qijdS1oTwfFfrNKQZ8ND4YyIgf2Jt-0ACMltvV5noQF5qdcRmdiVdpJVe0fOjnlRA0Pp9czp_EDwOOs'
    });
    
    return this.http.get(url, { headers });
  }
}