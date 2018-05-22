import { InstituicaoService } from './../../instituicao/instituicao.service';
import { Instituicao } from './../../instituicao/instituicao';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';

import { UnidadeService } from "../unidade.service";
import { Unidade } from "../unidade";
import { Observable } from 'rxjs/Observable';
import { CURRENCYMASKDIRECTIVE_VALUE_ACCESSOR } from 'ng2-currency-mask';
import { FormControl } from '@angular/forms/src/model';

@Component({
  selector: 'app-unidade-form',
  templateUrl: './unidade-form.component.html',
  styleUrls: ['./unidade-form.component.css']
})
export class UnidadeFormComponent implements OnInit {

  unidade: Unidade;
  unidadeForm: FormGroup;

  constructor(

    private route: ActivatedRoute,
    private router: Router,
    private builder: FormBuilder,
    private imagem: FormBuilder,
    public unidadeService: UnidadeService,
    public instituicaoService: InstituicaoService,

  ) { }

  instituicoes: Instituicao[];

  ngOnInit() {
    this.unidade = new Unidade();

    this.instituicaoService.findAll().subscribe(instituicoes=>{
      this.instituicoes = instituicoes;
    });

    /* Obter o `ID` passado por parâmetro na URL */
    this.unidade.id = this.route.snapshot.params['id'];

    /* Define o titulo da página */
    // this.layout.title = (this.unidade.id == null) ? 'Nova Unidade' : 'Alterar Unidade';

    /* Reactive Forms */
    this.unidadeForm = this.builder.group({
      id:[],
      instituicao: [null,Validators.required],
      nome: [null, [Validators.required, Validators.maxLength(80)]],
      codigo: [null, [Validators.required, Validators.maxLength(3)]],
      bairro: [null, [Validators.required, Validators.maxLength(50)]],
      logradouro: [null, [Validators.required, Validators.maxLength(50)]],
      numero: [null, [Validators.required, Validators.maxLength(50)]],
      caixaPostal: [null, [Validators.required, Validators.maxLength(50)]],
      pais: [null,Validators.required],
      numeroFiscal: [null, [Validators.required, Validators.maxLength(20)]],
      provincia: [null,Validators.required],
      municipio: [null,Validators.required]
      
    }, {});

    // Se existir `ID` realiza busca para trazer os dados
    if (this.unidade.id != null) {
      this.unidadeService.findOne(this.unidade.id)
        .subscribe(unidade => {
          this.unidadeForm.patchValue(unidade);
        });
    }
  }

  /* Método para salva unidade */
  salvar(unidade: Unidade) {
    this.unidadeService.save(unidade)
      .subscribe(response => {
        /* Redireciona para lista */
        this.router.navigate(['/unidade']);
      })
  }

}
