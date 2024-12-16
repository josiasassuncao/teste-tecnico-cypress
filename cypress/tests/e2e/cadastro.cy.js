import { cadastro } from '../../support/elements/cadastro'
import { home } from '../../support/elements/home'

describe('Cadastro', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('Cadastrar novo usuário', () => {
    cy.cadastro()

    cy.get(cadastro.msg).should('contain', 'Cadastro realizado com sucesso')
    cy.get(home.menu).should('be.visible')
    cy.get(home.logout).should('be.visible')
  })

})