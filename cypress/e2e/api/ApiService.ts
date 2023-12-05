/// <reference types= "cypress" />
import { endpoints, Endpoints } from "./Endpoints";

export class ApiService {
    createUser(userName: string, password: string): Cypress.Chainable {
        return cy.request({
            method: 'POST',
            url: `${endpoints.BASE_URL}${endpoints.ACCOUNT}${endpoints.USER}`,
            body: {
                userName: userName,
                password: password
            },
            failOnStatusCode: false
        });
    }

    generateToken(userName: string, password: string): Cypress.Chainable {
        return cy.request({
            method: 'POST',
            url: `${endpoints.BASE_URL}${endpoints.ACCOUNT}${endpoints.GENERATE_TOKEN}`,
            body: {
                userName: userName,
                password: password
            },
            failOnStatusCode: false
        });
    }

    getAllBooks(): Cypress.Chainable {
        return cy.request({
            method: 'GET',
            url: `${endpoints.BASE_URL}${endpoints.BOOKSTORE}${endpoints.BOOKS}`,
            failOnStatusCode: false
        });
    }

    postBook(userId: string, token: string, isbn: string): Cypress.Chainable {
        return cy.request({
            method: 'POST',
            url: `${endpoints.BASE_URL}${endpoints.BOOKSTORE}${endpoints.BOOKS}`,
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: {
                userId: userId,
                collectionOfIsbns: [
                    {
                        isbn: isbn
                    }
                ]
            },
            failOnStatusCode: false
        });
    }

    deleteBook(token: string, isbn: string, userId: string): Cypress.Chainable {
        return cy.request({
            method: 'DELETE',
            url: `${endpoints.BASE_URL}${endpoints.BOOKSTORE}${endpoints.BOOK}`,
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: {
                isbn: isbn,
                userId: userId
            },
            failOnStatusCode: false
        });
    }
}

export const apiService = new ApiService();
