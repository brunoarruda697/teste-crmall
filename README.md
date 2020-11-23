# TesteCrmall

A minha ideia inicial era deixar tudo o que estava sendo pedido pronto primeiro e depois se desse tempo voltar refatorando e fazendo os testes unitários,
como percebi que a maioria dos endpoints retornavam thumbnail escolhi fazer os items em formato de cards, e como teria paginação e campo de busca fiz tudo em um componente
default e dentro dele eu renderizava o conteudo da página. A parte de cupom de desconto eu fiquei bastante confuso, cada vez que eu lia o que era pedido eu pensava em como fazer
de uma forma diferente, por fim acabei aplicando o cupom de desconto na hora de clicar no checkbox e enviando o valor já com desconto pro carrinho.

* Dificuldades:
- Eu tentei implementar um HttpInterceptor pra adicionar a key da marvel antes das requisições porém eu estava tendo problemas com CORS mesmo utilizando proxy, fiquei horas
tentando resolver mas não encontrei nenhuma solução portanto fiz de outra forma.

########################################################################################

## Npm install
Run `npm install` for installing all dependencies.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
