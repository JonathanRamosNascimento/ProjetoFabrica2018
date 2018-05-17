package com.processo.seletivo.domain.instituicao;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.validator.constraints.NotEmpty;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.io.Serializable;

@Entity
public class Instituicao implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "instituicao_id_seq")
    @SequenceGenerator(name = "instituicao_id_seq", sequenceName = "instituicao_id_seq", allocationSize = 1)
    @Column(name = "id")
    @Getter
    @Setter
    private long id;

    @NotEmpty
    @Column(name = "mantenedora")
    @Getter
    @Setter
    private String mantenedora;

    @NotEmpty
    @Size(max = 80)
    @Column(name = "nome")
    @Getter
    @Setter
    private String nome;

    @NotEmpty
    @Size(max = 10)
    @Column(name = "codigo", updatable = false)
    @Getter
    @Setter
    private String codigo;

    @NotEmpty
    @Size(max = 50)
    @Column(name = "bairro")
    @Getter
    @Setter
    private String bairro;

    @NotEmpty
    @Size(max = 80)
    @Column(name = "logradouro")
    @Getter
    @Setter
    private String logradouro;

    @NotEmpty
    @Size(max = 10)
    @Column(name = "numero")
    @Getter
    @Setter
    private String numero;

    @NotEmpty
    @Size(max = 20)
    @Column(name = "caixa_postal")
    @Getter
    @Setter
    private String caixaPostal;

    @NotEmpty
    @Size(max = 80)
    @Column(name = "pais")
    @Getter
    @Setter
    private String pais;

    @NotEmpty
    @Size(max = 20)
    @Column(name = "numero_fiscal")
    @Getter
    @Setter
    private String numeroFiscal;

    @NotEmpty
    @Size(max = 80)
    @Column(name = "provincia")
    @Getter
    @Setter
    private String provincia;

    @NotEmpty
    @Size(max = 80)
    @Column(name = "municipio")
    @Getter
    @Setter
    private String municipio;
}
