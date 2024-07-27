---
id: 1722038494-ccca16
aliases:
  - ccca16
tags:
  - courses
  - engineering
---

# ccca16

## Codigo Limpo 

- Quanto mais incerto for o contexto, mais dificil vai ser a estimativa do projeto
- Alta Rotatividade relacionada a Má qualidade do codigo
- Comportamento x Estrutura
    - Comportamento: O que faz o software ganhar dinheiro
    - Estrutura: O que mantém o comportamento
    - Quanto mais comportamento, mais estrutura é necessária.
    - Adicionar comportamentos mantendo a estrutura atual
- Maior competitividade do mercado cria a necessidade de softwares mais capazes e mais baratos, um bom código gera mais velocidade de adaptação e melhorias

## Refactoring

- Refatorar: Facilitar o entendimento do software, alterando a estrutura interna sem alterar o comportamento dele.

    - Quanto menos um software é refatorado, maior o consumo de tempo da equipe.
    - Tornar o software mais competitivo

- Code Smells: Sintomas de um software que podem ser usados como indicadores de problemas ( Evita a necessidade de um refactoring futuro )

## Testing

- Provam e garantem que dada um certa estrutura, um comportamento é realizado. Garantem que o seu trabalho faz o que voce deseja que ele faça
- Testes automatizados nao garantem regressão e ninguem consegue manter todos os casos de uso 
- Geram coragem de refatorar o código.
    - Porque refatorar? [Refactoring](#Refactoring)
- Design e Arquitetura da aplicação nao facilitam a criação de testes
    - Subir o rails para rodar testes no RSpec
- Maior parte das codebases não tem unidades independentes
    - Mockar DB == Acoplar com banco falso
- Disciplina > Experiencia e Conhecimento Tecnico em testar

## Arquitetura Hexagonal

- Contexto:
    - Baixa reutilizabilidade de códigos ( Usecases acoplados a um controller HTTP, só consigo calcular os juros por 1 usecase)
    - Dificuldade na testabilidade de códigos de negocios ( UI, negocios, Bancos de dados, HttpServer acoplados)

- Drivers Side
    - Test Case
    - Human 
    - Message Queue
    - Page APP

- Resources Side
    - Bancos de dados
    - SMTP 
    - Message Queue
    - Repository

- Aplicaçao pode ser igualmente movida por usuarios, testes ou scripts e testada e desenvolvida isoladas de eventuais recursos externos
- Acoplamento não é necessario apenas para substituir, mas sim para gerar melhores testes e mais possibilidades de recursos diferentes.
- Não tem relaçao com dominios
