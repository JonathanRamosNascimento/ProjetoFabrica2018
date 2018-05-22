import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { UnidadeService } from "../unidade.service";
import { Unidade } from "../unidade";

@Component({
  selector: 'app-unidade-details',
  templateUrl: './unidade-details.component.html',
  styleUrls: ['./unidade-details.component.css']
})
export class UnidadeDetailsComponent implements OnInit {

  unidade: Unidade;
  unidadeForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private builder: FormBuilder,
    public unidadeService: UnidadeService
  ) { }

  ngOnInit() {

    this.unidade = new Unidade();

    /* Obter o `ID` passado por parâmetro na URL */
    this.unidade.id = this.route.snapshot.params['id'];

    /* Define o titulo da página */
    // this.layout.title = 'Visualizar unidade';

    /* Reactive Forms */
    this.unidadeForm = this.builder.group({
      id: [],
      mantenedora: this.builder.control('', [Validators.required, Validators.maxLength(80)]),
      nome: this.builder.control('', [Validators.required, Validators.maxLength(80)]),
      codigo: this.builder.control('', [Validators.required, Validators.maxLength(3)]),
      bairro: this.builder.control('', [Validators.required, Validators.maxLength(20)]),
      logradouro: this.builder.control('', [Validators.required, Validators.maxLength(50)]),
      numero: this.builder.control('', [Validators.required, Validators.maxLength(80)]),
      caixaPostal: this.builder.control('', [Validators.required, Validators.maxLength(80)]),
      pais: this.builder.control('', [Validators.required, Validators.maxLength(80)]),
      numeroFiscal: this.builder.control('', [Validators.required, Validators.maxLength(80)]),
      provincia: this.builder.control('', [Validators.required, Validators.maxLength(80)]),
      municipio: this.builder.control('', [Validators.required, Validators.maxLength(80)]),
    }, {});

    // Desabilitar formulário para edição
    this.unidadeForm.disable();

    // Se existir `ID` realiza busca para trazer os dados
    if (this.unidade.id != null) {
      this.unidadeService.findOne(this.unidade.id)
        .subscribe(unidade => {
          this.unidadeForm = this.builder.group(unidade, {})
        })
    }
  }
}
