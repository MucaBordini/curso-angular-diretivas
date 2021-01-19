import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngclass',
  templateUrl: './diretiva-ngclass.component.html',
  styleUrls: ['./diretiva-ngclass.component.css']
})
export class DiretivaNgclassComponent implements OnInit {

  ativo = false;
  tamanhoFonte = 10;

  constructor() { }

  ngOnInit(): void {
  }

  mudarAtivo():void {
    this.ativo = !this.ativo;
  }

}
