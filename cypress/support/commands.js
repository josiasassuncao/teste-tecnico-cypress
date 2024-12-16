import { cadastro } from './elements/cadastro'
import { faker } from '@faker-js/faker'
import { login } from './elements/login'

Cypress.Commands.add('cadastro', () => {
  cy.get(login.link_cadastro).click()
  cy.get(cadastro.nome).type(faker.person.fullName())
  cy.get(cadastro.email).type(faker.internet.email())
  cy.get(cadastro.password).type('123456')

  cy.get(cadastro.btn_cadastrar).click()
})

Cypress.Commands.add('login', (usuario, senha) => {
  cy.get(login.email).type(usuario)
  cy.get(login.senha).type(senha)
  cy.get(login.btn_entrar).click()
})

Cypress.Commands.add('verificaLogin', (usuario, senha) => {
  cy.api({
    method: 'POST',
    url: `${Cypress.env('apiUrl')}/login`,
    failOnStatusCode: false,
    body: {
      email: usuario,
      password: senha
    }
  })
})

Cypress.Commands.add('cadastroApi', (email, senha) => {
  cy.api({
    method: 'POST',
    url: `${Cypress.env('apiUrl')}/usuarios`,
    body: {
      nome: faker.person.fullName(),
      email: email,
      password: senha,
      administrador: false
    }
  })
})