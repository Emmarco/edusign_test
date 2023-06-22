import { Component, Input, EventEmitter, Output  } from '@angular/core';
import { InterfaceApprenant } from './apprenant.component.interface';

@Component({
  selector: 'app-apprenant',
  templateUrl: './apprenant.component.html',
  styleUrls: ['./apprenant.component.css']
})
export class ApprenantComponent {
  @Input() donnees: InterfaceApprenant;
  @Input() drawer: any;
  @Output() signatureEmitter: EventEmitter<number> = new EventEmitter<number>();

  // performAction(): void {
  //   // Perform the desired action based on the selected object
  //   console.log('Performing action on:', this.donnees);
  // }
  emitSignature(): void {
    this.drawer.toggle()
    this.signatureEmitter.emit(this.donnees.id);
  }
  changerStatutApprenant(event: any): void{
    console.log("changerstatut")
    console.log(event.value)
    fetch(`http://localhost:6272/apprenants/${event.value}`)
      .then(data=>{
        if(data.statusText.match(/^[45]{1}.*/)){
          throw new Error('Erreur dans la requete')
        }
        else return data.json()
      })
      .then(d=>{
        console.log(d.data)
        this.donnees = d.data
        //emit dans les datas du parents
      })
      .catch((e)=>{
        console.error("Erreur requete")
        console.error(e)
      })
  }

}
