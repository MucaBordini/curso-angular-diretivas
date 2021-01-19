import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.css']
})
export class DiretivaNgifComponent implements OnInit {

  cursos = ["Angular"];

  mostrarCursos = false;

  onMostrarCursos():void {
    this.mostrarCursos = !this.mostrarCursos;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
