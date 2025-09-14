describe('Http Request', ()=> {

    it('get appel', ()=>{
        cy.request('GET', 'http://localhost:8080/api/events/')
        .its('status')
        .should('equal', 200)
    })

    it.only('post appel', ()=> {

        cy.request({

                method : 'POST',
                url : 'http://localhost:8080/api/inscription',
                body:   {
                                eventId: "0efrg1400351423rfd",
                                name: "John",
                                surname: "123",
                                email: "john123@test.tld",
                                date: "2023-05-30T20:28:45.544Z"
                        } 

        })

        .its('status')
        .should('equal', 201)  
    })

/*
    it('put appel', () => {

    cy.request({

                            method : 'PUT',
                            url : '',
                            body:   {




                                    } 


                        .its('status')
                        .should('equal', 200)            



                    })






        })    

    it('delete appel', () => {

    cy.request({

                            method : 'PUT',
                            url : ''
                            


                                   



                    })

            .its('status')
            .should('equal', 200) 




        })    

*/


})