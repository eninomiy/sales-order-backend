import { Customer, Customers } from '@models/sales';

const customer: Customer = {
    email: 'john.doe@example.com',
    firstName: 'John',
    lastName: 'Doe',
    phoneNumber: '+1234567890',
};

const cutomers: Customers = [customer]

const funcao = (variavel: string) => console.log(variavel);

funcao('Hello World');