import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EtudiantServiceService {

  constructor(private http:HttpClient) { }



  public  retournerListeFormation(url){
    return this.http.get(url);
  }

  public retournerListeEtudiants(url){
    return this.http.get(url);
  }
}
