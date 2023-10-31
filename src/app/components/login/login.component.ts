import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  usuario:string=""
  senha:string=""

  usuarioLogado = new Usuario()

  private url:string = 'http://localhost:8085/conectar';

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  conectar(){
    this.http.get<Usuario>(`${this.url}/${this.usuario}/${this.senha}`)
    .subscribe(resultado => { alert(`Seja Bem vindo ${resultado.nome}`)},
               erro => {if(erro.status == 404){
                  alert("Usuário não cadastrado")
               }
              }
    );
  }

}
