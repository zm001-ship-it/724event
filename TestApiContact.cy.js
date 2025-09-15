describe('Http Request', ()=> {

    it('get appel', ()=>{
        cy.request('GET', 'http://localhost:8080/api/events/')
        .its('status')
        .should('equal', 200)
    })

    it.only('post appel', ()=> {

        cy.request({

                method : 'POST',
                url : 'http://localhost:8080/api/contact',
                body:   {
                                name: "Kleiber",
                                surname: "Michel",
                                contactType: "Personnel",
                                email: "abc@xyz.fr",
                                message: "test envoi message 1"
                        } 

        })

        .its('status')
        .should('equal', 201) 
       
 
    })




})