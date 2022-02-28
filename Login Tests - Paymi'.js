describe('Login Tests - Paymi', function () {
    it('Successful login', function () {
        cy.visit('https://staging.paymi.com/users/sign_in')

        cy.get('#user_email')
        .type('vivera3290@shackvine.com')
        cy.get('#user_password')
        .type('Passpass1')
        cy.get('.btn')
        .click()

        cy.url()
        .should('contain', 'https://staging.paymi.com/dashboard/accounts')
    })

    it('Incorrect password', function () {
        cy.visit('https://staging.paymi.com/users/sign_in')

        cy.get('#user_email')
        .type('vivera3290@shackvine.com')
        cy.get('#user_password')
        .type('Passpass2')
        cy.get('.btn')
        .click()

        cy.url()
        .should('contain', 'https://staging.paymi.com/users/sign_in')
        cy.get('.error-box__errors > li')
        .should('have.text', 'Invalid email or password.')
    })

    it('Non-existing user', function () {
        cy.visit('https://staging.paymi.com/users/sign_in')

        cy.get('#user_email')
        .type('vivera3291@shackvine.com')
        cy.get('#user_password')
        .type('Passpass1')
        cy.get('.btn')
        .click()

        cy.url()
        .should('contain', 'https://staging.paymi.com/users/sign_in')
        cy.get('.error-box__errors > li')
        .should('have.text', 'Invalid email address or password.')
    })

    it('Empty fields - email and password', function () {
        cy.visit('https://staging.paymi.com/users/sign_in')

        cy.get('.btn')
        .click()

        cy.url()
        .should('contain', 'https://staging.paymi.com/users/sign_in')
        cy.get('#email-error > .error-text')
        .should('contain.text', 'be blank')
        cy.get('#password-error > .error-text')
        .should('contain.text', 'be blank')
    })

    it('Empty field - password', function () {
        cy.visit('https://staging.paymi.com/users/sign_in')

        cy.get('#user_email')
        .type('vivera3291@shackvine.com')
        cy.get('.btn')
        .click()

        cy.url()
        .should('contain', 'https://staging.paymi.com/users/sign_in')
        cy.get('#password-error > .error-text')
        .should('contain.text', 'be blank')
    })

    it('Empty field - email', function () {
        cy.visit('https://staging.paymi.com/users/sign_in')

        cy.get('#user_password')
        .type('Passpass1')
        cy.get('.btn')
        .click()

        cy.url()
        .should('contain', 'https://staging.paymi.com/users/sign_in')
        cy.get('#email-error > .error-text')
        .should('contain.text', 'be blank')
    })
})
