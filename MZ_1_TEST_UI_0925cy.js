describe('Page contact', () => {
  /*
  beforeEach(()=>{
    cy.visit('http://localhost:3000/#contact')
    cy.get('.Button').contains('Contact').click()  
    cy.get('h2').contains('Contact')  
  })
  */
 
 context('vérification de visiter et d\'afficher la page de contact ', ()=> {

  it('Affichage de la page contact ', () => {
    //cy.get('button[type="button"]').click()
    //cy.get('[data-testid="button-test-id"]').should('contain.text','Contact').click()
    cy.visit('http://localhost:3000/#contact')
    cy.get('.Button').contains('Contact').click()  
    cy.get('h2').contains('Contact') 
    
         
  })

  it('vérifier les champs du formulaire', ()=>{

    cy.visit('http://localhost:3000/#contact')
    cy.get('.Button').contains('Contact').click()  
    cy.get('h2').contains('Contact') 

    // vérif nom et son champ
    cy.get('[class="inputField"]').should('contain.text', 'Nom')
    cy.get('[data-testid="field-testid"]').should('be.visible')

    // vérif prénom et son champ
    cy.get(':nth-child(2) > span').should('contain.text', 'Prénom')
    cy.get(':nth-child(2) > [data-testid="field-testid"]').should('be.visible')
    

    // vérif Personnel / Entreprise et son champ
    cy.get('.label').contains('Personnel / Entreprise')         //// code testé et validé jusqu'= cette ligne
    //cy.get('.label').should('contain.text', 'Personnel / Entreprise')
        

    // Ouvrir la liste déroulante
      //cy.get('[data-testid="collapse-button-testid"]').click()
      cy.get(':nth-child(1) > [data-testid="select-testid"] > .Select > [data-testid="collapse-button-testid"]').click()

    // Vérifier que les options s'affichent

    // Choisir "Personnel"
      //cy.get(':nth-child(1) > [data-testid="select-testid"] > .Select > [data-testid="collapse-button-testid"]').click()
      cy.get('.Select > ul > :nth-child(2)').should('contain.text','Personnel').click()

    // Choisir "Entreprise"  
      cy.get(':nth-child(1) > [data-testid="select-testid"] > .Select > [data-testid="collapse-button-testid"]').click()
      cy.get('.Select > ul > :nth-child(3)').should('contain.text','Entreprise').click()
      
    // Vérif du label Message et de son champ
      cy.get(':nth-child(2) > .inputField > span').should('contain.text', 'Message')
      cy.get(':nth-child(2) > .inputField > [data-testid="field-testid"]').should('be.visible')

    // vérification du bouton Envoyer

    //cy.get('[data-testid="button-test-id"]').should('be.visible')
    cy.get('.row > :nth-child(1) > [data-testid="button-test-id"').should('be.visible')
    cy.get('.row > :nth-child(1) > [data-testid="button-test-id"]').contains('Envoyer')
    //cy.get('.row > :nth-child(1) > [data-testid="button-test-id"]').should('contain.text', 'Envoyer')
  
  
  })

  it('Remplir les champs du formulaire et execution', () => {

      cy.visit('http://localhost:3000/#contact')
      cy.get('.Button').contains('Contact').click()  
      cy.get('h2').contains('Contact') 

    // Remplir le champ nom 
    //cy.get('[class="inputField"]').should('contain.text', 'Nom')
    cy.get(':nth-child(1) > :nth-child(1) > [data-testid="field-testid"]').type('mon nom')
    //cy.get('[data-testid="field-testid"]').type('mon nom')

    // Remplir le champ prénom
    //cy.get(':nth-child(2) > span').type('fsdfdsfdsf')
    cy.get(':nth-child(2) > [data-testid="field-testid"]').type('mon prénom')

    // Choisir "Personnel"
      cy.get(':nth-child(1) > [data-testid="select-testid"] > .Select > [data-testid="collapse-button-testid"]').click()
      cy.get('.Select > ul > :nth-child(2)').should('contain.text','Personnel').click()

    // Remplir le champ Email
    cy.get(':nth-child(4) > [data-testid="field-testid"]').type('monmail@gmail.com')

    // Remplir le champ Message
    cy.get(':nth-child(2) > .inputField > [data-testid="field-testid"]').type('voici mon message du formulaire de contact')

    // vérification du bouton Envoyer

    
    cy.get('.row > :nth-child(1) > [data-testid="button-test-id"').click()
    //cy.get('.row > :nth-child(1) > [data-testid="button-test-id"]').contains('Envoyer')
    

  })





 
})


})