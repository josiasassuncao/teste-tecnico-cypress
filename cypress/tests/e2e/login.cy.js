import { login } from '../../support/elements/login'
import { home } from '../../support/elements/home'

describe('Login', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('Fazer login', () => {
    const email = 'usuarioteste@teste.com'
    const senha = '123456'

    cy.verificaLogin(email, senha).then((response) => {
      if (response.status != 200) {
        cy.cadastroApi(email, senha)
      }
    })

    cy.login(email, senha)
    cy.get(home.menu).should('be.visible')
    cy.get(home.logout).should('be.visible')
  })

  it('Login inválido', () => {
    cy.get(login.email).type('loreipsum@teste.com')
    cy.get(login.senha).type('1937847')
    cy.get(login.btn_entrar).click()
    cy.get(login.msg).should('contain', 'Email e/ou senha inválidos')
  })
})