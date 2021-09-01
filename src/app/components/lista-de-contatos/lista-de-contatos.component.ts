import { Component, OnInit } from '@angular/core';
import { Contato } from 'src/app/models/Contato';

@Component({
  selector: 'app-lista-de-contatos',
  templateUrl: './lista-de-contatos.component.html',
  styleUrls: ['./lista-de-contatos.component.css']
})
export class ListaDeContatosComponent implements OnInit {

  contatos:Contato[] = [
    {
      nome:"Victor Yao 1",
      email:"yao@teste.com",
      telefone:['1234 - 4321']
    },
    {
      nome:"Victor Yao 2",
      email:"yao@teste.com",
      telefone:['2234 - 4322']
    },
    {
      nome:"Victor Yao 3",
      email:"yao@teste.com",
      telefone:['3234 - 4323']
    },
    {
      nome:"Victor Yao 4",
      email:"yao@teste.com",
      telefone:['4234 - 4324']
    },
    {
      nome:"Victor Yao 5",
      email:"yao@teste.com",
      telefone:['5234 - 4325']
    },
    {
      nome:"Victor Yao 6",
      email:"yao@teste.com",
      telefone:['6234 - 4326']
    },
    {
      nome:"Victor Yao 7",
      email:"yao@teste.com",
      telefone:['7234 - 4327']
    },
    {
      nome:"Victor Yao 8",
      email:"yao@teste.com",
      telefone:['8234 - 4328']
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
