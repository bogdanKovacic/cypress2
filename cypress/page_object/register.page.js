export default class AuthPage {
    
    get first_name() {
        return cy.get('#first-name')
    }
    
    get last_name() {
        return cy.get('#last-name')
    }
    
    get email() {
        return cy.get('#email')
    }
    
    get password() {
        return cy.get('#password')
    }

    get password_confirmation() {
        return cy.get('#password-confirmation')
    }

    register({first_name, last_name, email, password, password_confirmation}) {
        this.first_name.type(first_name)
        this.last_name.type(last_name)
        this.email.type(email)
        this.password.type(password)
        this.password_confirmation.type(password_confirmation)
    }

    /*register({first_name, last_name, email, password, password_confirmation}) {
        this.first_name.type(first_name)
        this.last_name.type(last_name)
        this.email.type(email)
        this.password.type(password)
        this.password_confirmation.type(password_confirmation)
    } */

}

export const authPage = new AuthPage()
