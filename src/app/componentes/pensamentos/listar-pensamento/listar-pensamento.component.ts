import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
    {
      conteudo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum iaculis tincidunt orci, at dignissim elit ultricies vel. Cras nulla justo, sagittis a leo euismod, ultrices porta lectus. Nam ut egestas nisl. Vestibulum scelerisque elit quis tortor eleifend.',
      autoria: 'Alan',
      modelo: 'modelo3'
    },
    {
      conteudo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum iaculis tincidunt orci, at dignissim elit ultricies vel. Nam ut egestas nisl. Vestibulum scelerisque elit quis tortor eleifend.',
      autoria: 'Alan Salvaterra',
      modelo: 'modelo1'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
