Projeto Cypress

Versão: 1.0.0

Descrição

Este projeto utiliza o framework Cypress para a automação de testes. Ele está configurado para executar testes end-to-end (E2E) e testes de API.

Estrutura do Projeto

cypress/: Contém os testes e as configurações do Cypress.

cypress.config.js: Arquivo de configuração do Cypress.

node_modules/: Dependências do projeto.

package.json: Informações do projeto e dependências.

package-lock.json: Registro exato das versões das dependências instaladas.

Scripts Disponíveis

Os seguintes comandos estão configurados no package.json para facilitar a execução dos testes:

Testes End-to-End (E2E)

Abrir a interface do Cypress para E2E:

npm run open:e2e

Executar os testes E2E no terminal:

npm run test:e2e

Testes de API

Abrir a interface do Cypress para testes de API:

npm run open:api

Executar os testes de API no terminal:

npm run test:api

Dependências

Produção:

cypress-plugin-api: ^2.11.2

Desenvolvimento:

@faker-js/faker: ^9.3.0

cross-env: ^7.0.3

cypress: ^13.16.1

Instalação

Certifique-se de ter o Node.js instalado.

Clone este repositório:

git clone <URL_DO_REPOSITORIO>

Acesse o diretório do projeto:

cd teste-tecnico-cypress

Instale as dependências:

npm install

Como Executar os Testes

Depois de instalar as dependências, você pode executar os testes usando os scripts mencionados acima. Escolha entre abrir a interface do Cypress para uma execução interativa ou rodar os testes diretamente pelo terminal.