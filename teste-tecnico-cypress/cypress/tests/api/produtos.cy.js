describe('Produtos', () => {

  it('Listar produtos', () => {
    cy.api({
      method: 'GET',
      url: '/produtos'
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body['produtos']).to.be.a('array')
    })
  })

  it('Listar produto pelo id', () => {
    const id = 'vPSjXaSjM5fuyNQO'
    cy.api({
      method: 'GET',
      url: `/produtos/${id}`
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body['_id']).to.be.eql(id)
      expect(response.body).to.have.property('nome')
      expect(response.body).to.have.property('preco')
      expect(response.body).to.have.property('descricao')
      expect(response.body).to.have.property('quantidade')
    })
  })

  it('Listar produto inexistente', () => {
    const id = '123456'
    cy.api({
      method: 'GET',
      url: `/produtos/${id}`,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(400)
      expect(response.body['message']).to.eql('Produto não encontrado')
    })
  })
})