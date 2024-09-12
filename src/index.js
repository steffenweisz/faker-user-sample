import './index.scss';

const { faker } = require('@faker-js/faker');

export function createRandomUser() {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
}

export const users = faker.helpers.multiple(createRandomUser, {
  count: 3,
});

const usersHtml = users.map(user => `
  <div class="userCard">
    <img class="avatar" src="${user.avatar}" alt="Avatar of ${user.username}">
    <p><strong>Username:</strong> ${user.username}</p>
    <p><strong>Email:</strong> ${user.email}</p>
    <p><strong>Birthdate:</strong> ${user.birthdate.toDateString()}</p>
    <p><strong>Registered At:</strong> ${user.registeredAt.toDateString()}</p>
  </div>
`).join('');

document.querySelector('#dev-products').innerHTML = usersHtml;
