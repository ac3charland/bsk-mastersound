/* global cy */

const ContactForm = {
    wrapper: '.form',
    nameField: '#form__name',
    subjectField: '#form__subject',
    emailField: '#form__email',
    messageField: '#form__message',
    submitButton: '.form__submit',
    nameError: '.form__name-error',
    subjectError: '.form__subject-error',
    emailError: '.form__email-error',
    messageError: '.form__message-error',
    apiError: '.form__api-error-msg',
    exercise: pageWrapper => {
        cy.get(ContactForm.submitButton).click()
        cy.get(pageWrapper)
        cy.get(ContactForm.nameError)
        cy.get(ContactForm.subjectError)
        cy.get(ContactForm.emailError)
        cy.get(ContactForm.messageError)

        cy.get(ContactForm.nameField).type('C-3P0')
        cy.get(ContactForm.nameError).should('not.exist')
        cy.get(ContactForm.submitButton).click()
        cy.get(ContactForm.nameError)
        cy.get(pageWrapper)
        cy.get(ContactForm.subjectError)
        cy.get(ContactForm.emailError)
        cy.get(ContactForm.messageError)

        cy.get(ContactForm.nameField).clear().type('Eddie Mother-Lovin\' Kramer')
        cy.get(ContactForm.nameError).should('not.exist')
        cy.get(ContactForm.submitButton).click()
        cy.get(pageWrapper)
        cy.get(ContactForm.subjectError)
        cy.get(ContactForm.emailError)
        cy.get(ContactForm.messageError)

        cy.get(ContactForm.subjectField).type('I want to hang with you')
        cy.get(ContactForm.subjectError).should('not.exist')
        cy.get(ContactForm.submitButton).click()
        cy.get(pageWrapper)
        cy.get(ContactForm.emailError)
        cy.get(ContactForm.messageError)

        cy.get(ContactForm.emailField).type('eddie')
        cy.get(ContactForm.emailError).should('not.exist')
        cy.get(ContactForm.submitButton).click()
        cy.get(pageWrapper)
        cy.get(ContactForm.emailError)
        cy.get(ContactForm.messageError)

        cy.get(ContactForm.emailField).clear().type('eddie@kramer')
        cy.get(ContactForm.emailError).should('not.exist')
        cy.get(ContactForm.submitButton).click()
        cy.get(pageWrapper)
        cy.get(ContactForm.emailError)
        cy.get(ContactForm.messageError)

        cy.get(ContactForm.emailField).clear().type('eddie@kramer.org')
        cy.get(ContactForm.emailError).should('not.exist')
        cy.get(ContactForm.submitButton).click()
        cy.get(pageWrapper)
        cy.get(ContactForm.messageError)

        cy.get(ContactForm.messageField).type('Bruce! You\'re the man. I want to hang with you.')
        cy.get(ContactForm.messageError).should('not.exist')

        cy.get(ContactForm.submitButton).click()
        cy.wait('@postMessage').then(req => {
            expect(req.request.body.email).to.eq('eddie@kramer.org')
            expect(req.request.body.message).to.eq('Bruce! You\'re the man. I want to hang with you.')
            expect(req.request.body.subject).to.eq('I want to hang with you')
            expect(req.request.body.name).to.eq('Eddie Mother-Lovin\' Kramer')
            expect(req.request.body.token).to.be.a('string')
        })
        cy.url().should('contain', '/contact/success')
    },
    complete: () => {
        cy.get(ContactForm.nameField).type('Eddie Mother-Lovin\' Kramer')
        cy.get(ContactForm.emailField).clear().type('eddie@kramer.gov')
        cy.get(ContactForm.subjectField).type('I want to hang with you')
        cy.get(ContactForm.messageField).type('Bruce! You\'re the man. I want to hang with you.')
        cy.get(ContactForm.submitButton).click()
    },
}

export default ContactForm
