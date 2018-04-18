import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-action-sheet',
  templateUrl: 'action-sheet.html',
})
export class ActionSheetPage {

  constructor(public actionSheetCtrl
    : ActionSheetController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActionSheetPage');
  }


  abrirActionSheet(){

      let actionSheet = this.actionSheetCtrl.create(
      {
          title : "Opções",
          buttons: [
            {
              icon: 'md-create',
              text: 'Opção A',
              role : 'desctructive',
              handler: () => {
                alert('Você clicou na opção A');
              }
            },
            {
              text: 'Opção B',              
              handler: () => {
               // alert('Você clicou na opção B');
              }
            },
            {
              icon:'md-exit',
              text: 'Cancelar',              
              role: 'cancel',
              handler: () => {
               // alert('Você clicou na opção Cancelar');
              }
            }

          ]
        }
      )
      actionSheet.present();
  }

}
