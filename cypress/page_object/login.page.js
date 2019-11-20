
export default class AuthPage {
    get email() {
        return cy.get('input[id="email"]')
    }
    get password() {
        return  cy.get('input[id="password"]')
    }
    
    get submit() {
        return cy.get('button[type=submit]')
    }
    
    login(email, password) {
        this.email.type(email)
        this.password.type(password)
        this.submit.click()
    }
    
    get alert() {
        return cy.get(' .alert-danger')
    }
}

export const authPage = new AuthPage()
