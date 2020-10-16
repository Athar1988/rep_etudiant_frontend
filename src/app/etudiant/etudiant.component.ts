import { Component, OnInit } from '@angular/core';
import {EtudiantServiceService} from '../services/etudiant-service.service';
import {Etudiant} from '../model/etudiant';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {

  formations:any= null;
  etudiants;
  currentFormation={id:0};
  mode=0;
  constructor(private etudService:EtudiantServiceService, private http:HttpClient) { }

  ngOnInit(): void {
this.onListeFormation();

  }


  onListeFormation() {
    console.log(this.formations);
    this.etudService.retournerListeFormation("http://localhost:8089/formations")
      .subscribe(
        data=>{
          this.formations=data;
          console.log(this.formations);
          this.mode=1;
        },
        err=>{
          console.log(err);
        });
  }

  onListeEtudiants(f){
    this.etudService.retournerListeEtudiants("http://localhost:8089/formations/"+f.id+"/etudiants")
      .subscribe(
        data=>{
          this.etudiants=data;
        },
        err=>{
          console.log(err);
        });
  }


}
