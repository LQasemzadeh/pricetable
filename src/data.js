
import { faker } from '@faker-js/faker';



export function createRandomUser() {
    return {
        Token: faker.image.avatar(),
        Balance: faker.datatype.number(1000),
        Deposit: faker.datatype.number(1000),
        Withdraw: faker.datatype.number(1000),
    };
}

export const USERS = faker.helpers.multiple(createRandomUser, {
    count: 5,
});