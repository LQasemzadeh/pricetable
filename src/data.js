
import { faker } from '@faker-js/faker';


const { faker } = require('@faker-js/faker');

export function createRandomUser() {
    return {
        AssetChain: faker.image.avatar(),
        Balance: faker.datatype.number(1000),
        Deposit: faker.datatype.number(1000),
        Withdraw: faker.datatype.number(1000),
    };
}

export const USERS = faker.helpers.multiple(createRandomUser, {
    count: 5,
});