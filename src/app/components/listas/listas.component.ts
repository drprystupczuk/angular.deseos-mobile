import { Component, Input, OnInit } from '@angular/core';
import { DeseosService } from 'src/app/services/deseos.service';
import { Router } from '@angular/router';
import { Lista } from 'src/app/models/lista.model';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {


@Input() tab = 1;

  constructor(public deseosService: DeseosService,
    private router: Router) { }

  ngOnInit() {}

  abrirLista(lista: Lista) {
    this.router.navigateByUrl(`/tabs/tab${this.tab}/agregar/${lista.id}`);
  }

  borrarLista(lista: Lista){
    this.deseosService.borrarLista(lista);
  }

}
