package com.processo.seletivo.domain.instituicao;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface InstituicaoRepository extends JpaRepository<Instituicao, Long> {

    public List<Instituicao> findByNomeOrCodigo(String nome, String codigo);

    public List<Instituicao> findByIdAndNomeOrCodigo(long id, String nome, String codigo);

}
