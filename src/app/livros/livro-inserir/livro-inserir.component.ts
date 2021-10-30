import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Livro } from '../livro.model';
import { LivroService } from '../livro.service';

@Component({
  selector: 'app-livro-inserir',
  templateUrl: './livro-inserir.component.html',
  styleUrls: ['./livro-inserir.component.css']
})
export class LivroInserirComponent implements OnInit {


  constructor(public livroService: LivroService) { }

  ngOnInit(): void {
  }

  onAdicionarLivro(form: NgForm){
    if(form.invalid){
      return;
    }
    this.livroService.adicionarLivro(
      form.value.id,
      form.value.titulo,
      form.value.autor,
      form.value.numeroPaginas
     )

     form.resetForm();

  }


}
