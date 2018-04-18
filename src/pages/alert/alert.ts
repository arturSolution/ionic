import { Component } from '@angular/core';
import { IonicPage, AlertController } from 'ionic-angular';

/**
 * Generated class for the AlertPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alert',
  templateUrl: 'alert.html',
})
export class AlertPage {

  constructor(private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlertPage');
  }

  basicAlert(){
    
    let alert  = this.alertCtrl.create(
      { 
        title : 'Atenção',
        subTitle : 'Curso de Ionic em Promoção',
        buttons : ['OK']
      }
    );

    alert.present();

  }

  confirmAlert(){

    let alert  = this.alertCtrl.create(
      { 
        title : 'Confirmar Compra',
        message: 'Tem certeza que deseja comprar este livro?',
        buttons : [
            {
              text: 'Cancelar',
              role: 'cancel',
              handler: ()=>{
                console.log('Compra cancelada');

              }
            },
            {
              text: 'Comprar',
              handler: ()=>{
                console.log('Compra realizada com sucesso!');

              }

            }
          ]
      }
    );

    alert.present();
  }

  inputAlert(){
    
    let alert  = this.alertCtrl.create(
      { 
        title : 'Acesso restrito',
        inputs: [
          {
            name : 'login',
            placeholder: 'Login'
          },
          {
            name: 'senha',
            placeholder: 'Senha',
            type: 'password'
          }
        ],
        buttons : [
          {
            text: 'Cancelar',
            role: 'cancel',
            handler : data => {

              console.log('Autenticação Cancelada');
            }
          },
          {
            text: 'Entrar',
            handler : data => {

              if(data.login=='paulo' && data.senha=='123'){
                console.log('Usuário Autenticado');
              }else{
                console.log('Seus Dados Não Conferem');
              }
            }
          }

        ]
      }
    );

    alert.present();

  }

  radioAlert(){
    
    let alert  = this.alertCtrl.create();
    alert.setTitle('Escolha uma cor');
    alert.addInput(
      {
          type: 'radio',
          label: 'Vermelho',
          value: 'red',
          checked: false
      }
    );

    alert.addInput(
      {
          type: 'radio',
          label: 'Verde',
          value: 'green',
          checked: false
      }
    );
    
    alert.addButton("Cancelar");

    alert.addButton({
      text: 'OK',
      handler: (data: any) =>{

        console.log('Cor selecionada ', data);
      }

    });
    

    alert.present();

  }

  checkAlert(){
 
    let alert  = this.alertCtrl.create();
    alert.setTitle('Quais frutas você gosta?');
    alert.addInput(
      {
          type: 'checkbox',
          label: 'Laranja',
          value: 'laranja',
          checked: true
      }
    );

    alert.addInput(
      {
          type: 'checkbox',
          label: 'Maça',
          value: 'maça',
          checked: false
      }
    );
    
    alert.addButton("Cancelar");

    alert.addButton({
      text: 'OK',
      handler: (data: any) =>{

        console.log('Fruta selecionada ', data);
      }

    });
    

    alert.present();

  }
}
