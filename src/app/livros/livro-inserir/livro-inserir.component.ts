import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Livro } from '../livro.model';

@Component({
  selector: 'app-livro-inserir',
  templateUrl: './livro-inserir.component.html',
  styleUrls: ['./livro-inserir.component.css']
})
export class LivroInserirComponent implements OnInit {

  @Output() livroAdicionado = new EventEmitter<Livro>();
  id;
  titulo;
  autor;
  numeroPaginas;

  constructor() { }

  ngOnInit(): void {
  }

  onAdicionarLivro(){
    const livro: Livro = {
      id:this.id,
      titulo:this.titulo,
      autor:this.autor,
      numeroPaginas:this.numeroPaginas
    };
    this.livroAdicionado.emit(livro);

  }

}
