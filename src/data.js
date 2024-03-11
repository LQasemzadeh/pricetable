import { faker } from '@faker-js/faker';


 export function createRandomUser() {
    return{
        icon: faker.image.avatar(),
        symbol: faker.person.firstName(),
        price: faker.datatype.number(1000),
    };
}
 export const USERS =faker.helpers.multiple(createRandomUser, {
    count: 30,
});


