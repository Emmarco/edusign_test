import { Component, OnInit } from '@angular/core';
import { InterfaceApprenant } from '../apprenant/apprenant.component.interface';

@Component({
  selector: 'app-listeapprenant',
  templateUrl: './listeapprenant.component.html',
  styleUrls: ['./listeapprenant.component.css']
})



export class ListeapprenantComponent implements OnInit {
  arrApprenants: InterfaceApprenant[]
    // implement OnInit's `ngOnInit` method
  ngOnInit() {
    fetch("http://localhost:6272/apprenants")
      .then(data=>{
        if(data.statusText.match(/[45]{1}.*/)){
          throw new Error('Erreur dans la requete')
        }
        else return data.json()
      })
      .then(d=>this.arrApprenants=d)
      .catch((e)=>{
        console.error("Erreur requete")
        console.error(e)
      })
  }

  lancerSignature(i:number){
    console.log(`lancer signature de ${i}`)
  }
  sendSignature(){
    console.log("envoyer signature")
  }

  // logIt(msg: string) {
  //   this.logger.log(`#${nextId++} ${msg}`);
  // }
}