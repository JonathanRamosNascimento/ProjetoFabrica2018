import { MantenedoraService } from './../../mantenedora/mantenedora.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { InstituicaoService } from "../instituicao.service";
import { Instituicao } from "../instituicao";
import { Mantenedora } from '../../mantenedora/mantenedora';

@Component({
  selector: 'app-instituicao-details',
  templateUrl: './instituicao-details.component.html',
  styleUrls: ['./instituicao-details.component.css']
})
export class InstituicaoDetailsComponent implements OnInit {

  instituicao: Instituicao;
  instituicaoForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private builder: FormBuilder,
    public instituicaoService: InstituicaoService,
    public mantenedoraService: MantenedoraService
  ) { }

  mantenedoras: Mantenedora[];

  ngOnInit() {

    this.instituicao = new Instituicao();

    this.mantenedoraService.findAll().subscribe(mantenedoras =>{
      this.mantenedoras = mantenedoras;
    });

    /* Obter o `ID` passado por parâmetro na URL */
    this.instituicao.id = this.route.snapshot.params['id'];

    /* Define o titulo da página */
    // this.layout.title = 'Visualizar instituicao';

    /* Reactive Forms */
    this.instituicaoForm = this.builder.group({
      id: [],
      mantenedora: this.builder.control('', Validators.required),
      nome: this.builder.control('', [Validators.required, Validators.maxLength(80)]),
      codigo: this.builder.control('', [Validators.required, Validators.maxLength(3)]),
      bairro: this.builder.control('', [Validators.required, Validators.maxLength(20)]),
      logradouro: this.builder.control('', [Validators.required, Validators.maxLength(50)]),
      numero: this.builder.control('', [Validators.required, Validators.maxLength(50)]),
      caixaPostal: this.builder.control('', [Validators.required, Validators.maxLength(50)]),
      pais: this.builder.control('', Validators.required),
      numeroFiscal: this.builder.control('', [Validators.required, Validators.maxLength(50)]),
      provincia: this.builder.control('', Validators.required),
      municipio: this.builder.control('', Validators.required),
    }, {});
    

    // Desabilitar formulário para edição
    this.instituicaoForm.disable();

    // Se existir `ID` realiza busca para trazer os dados
    if (this.instituicao.id != null) {
      this.instituicaoService.findOne(this.instituicao.id)
        .subscribe(instituicao => {
          this.instituicaoForm = this.builder.group(instituicao, {})
        })
    }
  }

  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
}
