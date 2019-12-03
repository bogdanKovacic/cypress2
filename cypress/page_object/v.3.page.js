export default class V3Page {
    
    get first_name() {
        return cy.get('input[id="first_name"]')
    }
    get last_name() {
        return  cy.get('input[id="last_name"]')
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

    get checkbox() {
        return cy.get('#checkbox')
    }
    
    get submit() {
        return cy.get('button[type=submit]')
    }


    register({name, surname, email, password, passConf, checkbox}) {
        this.first_name.type(name)
        this.last_name.type(surname)
        this.email.type(email)
        this.password.type(password)
        this.password_confirmation.type(passConf)
        this.checkbox.check()
        this.submit.submit()
    }

    // register({name, surname, email, password, passConf, checkbox}) {
    //     name && this.first_name.type(name)
    //     surname && this.last_name.type(surname)
    //     email && this.email.type(email)
    //     password && this.password.type(password)
    //     passConf && this.password_confirmation.type(passConf)
    //     checkbox && this.checkbox.check()
    //     this.submit.submit()
    // }
    
    
    
}

export const v3page = new V3Page()
