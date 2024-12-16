# Projeto Cypress

## Versão: 1.0.0

# Descrição

Este projeto utiliza o framework Cypress com javascript para a automação de testes. Ele está configurado para executar testes end-to-end (E2E) e testes de API.
Também foi configurado de uma forma que a depender do tipo de parâmetro enviado executa um tipo de teste (api, web)

# Estrutura do Projeto

- cypress/: Contém os testes e as configurações do Cypress.

- cypress.config.js: Arquivo de configuração do Cypress.

- node_modules/: Dependências do projeto.

- package.json: Informações do projeto e dependências.

- package-lock.json: Registro exato das versões das dependências instaladas.

# Scripts Disponíveis

Os seguintes comandos estão configurados no package.json para facilitar a execução dos testes:

# Testes End-to-End (E2E)

 Abrir a interface do Cypress para E2E:

-  npm run open:e2e

# Executar os testes E2E no terminal:

- npm run test:e2e

# Testes de API

 Abrir a interface do Cypress para testes de API:

- npm run open:api

# Executar os testes de API no terminal:

- npm run test:api

# Dependências

- cypress-plugin-api: ^2.11.2

# Desenvolvimento:

- @faker-js/faker: ^9.3.0

- cross-env: ^7.0.3

- cypress: ^13.16.1

# Instalação

1. Certifique-se de ter o Node.js instalado.

2. Clone este repositório:

  git clone [https://github.com/josiasassuncao/teste-tecnico-cypress](URL)

3. Acesse o diretório do projeto:

4. cd teste-tecnico-cypress

5. Instale as dependências:

   npm install

Como Executar os Testes
- executar os testes web sem abrir tela: npm run test:e2e
- executar os testes de api sem abrir tela: npm run test:api
- executar os testes web abrindo tela: npm run open:e2e
- executar os testes de api abrindo tela: npm run open:api


