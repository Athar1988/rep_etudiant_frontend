import { Component, OnInit } from '@angular/core';
import {EtudiantServiceService} from '../services/etudiant-service.service';
import {HttpClient} from '@angular/common/http';
import {Etudiant} from '../model/etudiant';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  formations:any= null;

  constructor( private etudService:EtudiantServiceService, private http:HttpClient) { }

  ngOnInit(): void {
    this.etudService.retournerListeFormation("http://localhost:8089/formations")
      .subscribe(
        data=>{
          this.formations=data;
          console.log(this.formations);
        },
        err=>{
          console.log(err);
        });
  }

  onGetAjouter(data: any) {
    this.http.post("http://localhost:8089/etudiants/",data)
      .subscribe(
        res=>{
          console.log(res);

        },
        err=>{
          console.log(err);
        });
  }
}
