import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DeseosService } from 'src/app/services/deseos.service';
import { AlertController } from '@ionic/angular';
import { Lista } from 'src/app/models/lista.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public deseosService: DeseosService,
              private router: Router,
              public alertController: AlertController) {

  }

    async agregarLista(){

      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Nueva lista',
        // subHeader: 'Subtitle',
        // message: 'This is an alert message.',
        inputs: [
          {
            name: 'titulo',
            type: 'text',
            placeholder: 'Nombre de la lista'
          }
        ],
        buttons: [
          {
            text : 'Cancelar',
            role: 'cancel',
            handler: () => {
              console.log('Cancelar');
            }
          },
          {
            text: 'Crear',
            handler: (data) => {
              console.log(data);
              if ( !data.titulo.length ) {
                return;
              }
              const listaId = this.deseosService.crearLista( data.titulo );
              this.router.navigateByUrl(`/tabs/tab1/agregar/${listaId}`);
            }
          }
        ]
      });
      alert.present();
    }

    abrirLista(lista: Lista) {
      this.router.navigateByUrl(`/tabs/tab1/agregar/${lista.id}`);
    }
}
