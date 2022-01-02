import NavBar from '../page/nav-bar'
import HomePage from '../page/home-page'
import ServicePage from '../page/service-page'
import ContactPage from '../page/contact-page'

context('Page Navigation', () => {
    beforeEach(() => {
        cy.server()
    })

    it('navigates to proper pages with navbar links', () => {
        cy.visit('/')
        cy.get(HomePage.wrapper)
        cy.compareSnapshot('home')
        cy.scrollTo(0, 100)
        cy.get('.navbar').compareSnapshot('navbar-scrolled')

        cy.get(NavBar.link).eq(0).click()
        cy.url().should('contain', '/audio-engineering')
        cy.get(ServicePage.wrapper)
        cy.compareSnapshot('audio-engineering')

        cy.get(NavBar.link).eq(1).click()
        cy.url().should('contain', '/audio-transfer')
        cy.get(ServicePage.wrapper)
        cy.compareSnapshot('audio-transfer')

        cy.get(NavBar.link).eq(2).click()
        cy.url().should('contain', '/audio-equipment')
        cy.get(ServicePage.wrapper)
        cy.compareSnapshot('audio-equipment')

        cy.get(NavBar.link).eq(3).click()
        cy.url().should('contain', '/contact')
        cy.get(ContactPage.wrapper)
        cy.compareSnapshot('contact')

        cy.get(NavBar.homeLink).click()

        cy.url().should('contain', '/')
        cy.get(HomePage.wrapper)
    })
})
