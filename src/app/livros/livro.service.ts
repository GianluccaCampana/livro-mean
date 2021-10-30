import { Injectable } from "@angular/core";
import { Livro } from "./livro.model";
import {Subject} from "rxjs";

@Injectable({providedIn: 'root'})
export class LivroService {
  private livros: Livro[]=[];
  private listaLivroAtualizada = new Subject<Livro[]>();

  getLivros(): Livro[] {
    return [...this.livros];
  }

  adicionarLivro(id: string, titulo: string, autor: string, numeroPaginas: string){
    const livro: Livro = {
      id: id,
      titulo: titulo,
      autor: autor,
      numeroPaginas: numeroPaginas
    };
    this.livros.push(livro); //inserir no final do array
    this.listaLivroAtualizada.next([...this.livros]);
  }
  getListaDeLivrosAtualizadaObservable(){
    return this.listaLivroAtualizada.asObservable();
  }

}
