import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DeseosService } from 'src/app/services/deseos.service';
import { Router } from '@angular/router';
import { Lista } from 'src/app/models/lista.model';
import { AlertController, IonList, IonListHeader } from '@ionic/angular';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

@ViewChild(IonList) lista: IonList;
@Input() tab = 1;

  constructor(public deseosService: DeseosService,
              private router: Router,
              public alertController: AlertController) { }

  ngOnInit() {}

  abrirLista(lista: Lista) {
    this.router.navigateByUrl(`/tabs/tab${this.tab}/agregar/${lista.id}`);
  }

  async editarLista(lista: Lista){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Editar lista',
      // subHeader: 'Subtitle',
      // message: 'This is an alert message.',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          placeholder: 'Nombre de la lista',
          value: lista.titulo
        }
      ],
      buttons: [
        {
          text : 'Cancelar',
          role: 'cancel',
          handler: () => {
            this.lista.closeSlidingItems();
          }
        },
        {
          text: 'Editar',
          handler: (data) => {
            console.log(data);
            if ( !data.titulo.length ) {
              return;
            }
            lista.titulo = data.titulo;
            this.deseosService.guardarStorage();
            this.lista.closeSlidingItems();
          }
        }
      ]
    });
    alert.present();

  }

  borrarLista(lista: Lista){
    this.deseosService.borrarLista(lista);
  }

}
