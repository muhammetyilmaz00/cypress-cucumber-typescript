import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { apiService } from "../../cypress/e2e/api/ApiService";
import { faker } from '@faker-js/faker';

interface Response {
    userID: string;
    token: string;
    books: any[]; 
}

let randomNumber: bigint;
let response: Cypress.Response<Response>;
let userId: string;
let token: string;
let booksResponse: Response;

beforeEach(() => {
    faker.seed(Date.now());
    randomNumber = faker.number.bigInt();
});

When('I send a POST request to create a user with valid credentials', () => {
    apiService.createUser('testUser' + randomNumber, 'String123321*-').then((res) => {
        response = res;
    });
});

Then('the response should have a status code of {int}', (statusCode: number) => {
    expect(response.status).to.be.eq(statusCode);
});

Then('I store the userId', () => {
    userId = response.body.userID;
});

Then('I store the token', () => {
    token = response.body.token;
});

When('I send a POST request to retrieve the error response for creating a user with invalid credentials', () => {
    apiService.createUser('username', 'password').then((res) => {
        response = res;
    });
});

When('I send a POST request to generate a token with valid credentials', () => {
    apiService.generateToken('testUser' + randomNumber, 'String123321*-').then((res) => {
        response = res;
        expect(res.headers).to.have.property('content-type', 'application/json; charset=utf-8');
    });
});

When('I send a GET request to retrieve all books', () => {
    apiService.getAllBooks().then((res) => {
        response = res;
        expect(res.headers).to.have.property('content-type', 'application/json; charset=utf-8');
    });
});

Then('I store the books', () => {
    booksResponse = response.body;
});

When('I send a POST request to post the books to the user', () => {
    return cy.wrap(booksResponse.books).each((book: any) => {
        return apiService.postBook(userId, token, book.isbn).then((res) => {
            expect(res.status).to.be.eq(201);
            response = res;
            expect(res.headers).to.have.property('content-type', 'application/json; charset=utf-8');
        });
    });
});

When('I send a POST request to post the books with the invalid user details', () => {
    apiService.postBook('invalid user', 'invalid token', '9781449325862').then((res) => {
        response = res;
        expect(res.headers).to.have.property('content-type', 'application/json; charset=utf-8');
    });
});

When('I send a DELETE request to delete a book from the user', () => {
    apiService.deleteBook(token, booksResponse.books[0].isbn, userId).then((res) => {
        response = res;
    });
});

When('I send a DELETE request to delete a book from the invalid user details', () => {
    apiService.deleteBook('invalid token', '9781449325862', 'invalid user').then((res) => {
        response = res;
    });
});
