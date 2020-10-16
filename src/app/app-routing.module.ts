import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EtudiantComponent} from './etudiant/etudiant.component';
import {InscriptionComponent} from './inscription/inscription.component';

const routes: Routes = [
  {path: 'etudiant', component: EtudiantComponent},
  {path: 'inscription', component: InscriptionComponent}

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
