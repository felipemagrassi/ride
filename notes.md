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
