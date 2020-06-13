'use strict';
const faker = require('faker');
const moment = require('moment');
let date = new Date();

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('messages', [
      {
        id:1,
        text: faker.lorem.sentence(3),
        userId: Math.ceil(Math.random() * 10),
        receiverId: Math.ceil(Math.random() * 10),
        createdAt:moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
      },
      {
        id: 2,
        text: faker.lorem.sentence(3),
        userId: Math.ceil(Math.random() * 10),
        receiverId: Math.ceil(Math.random() * 10),
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
      },
      {
        id: 3,
        text: faker.lorem.sentence(3),
        userId: Math.ceil(Math.random() * 10),
        receiverId: Math.ceil(Math.random() * 10),
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
      },
      {
        id: 4,
        text: faker.lorem.sentence(3),
        userId: Math.ceil(Math.random() * 10),
        receiverId: Math.ceil(Math.random() * 10),
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
      },
      {
        id: 5,
        text: faker.lorem.sentence(3),
        userId: Math.ceil(Math.random() * 10),
        receiverId: Math.ceil(Math.random() * 10),
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
      },
      {
        id: 6,
        text: faker.lorem.sentence(3),
        userId: Math.ceil(Math.random() * 10),
        receiverId: Math.ceil(Math.random() * 10),
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
      },
            {
        id:7,
        text: faker.lorem.sentence(3),
        userId: Math.ceil(Math.random() * 10),
        receiverId: Math.ceil(Math.random() * 10),
        createdAt:moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
      },
      {
        id: 8,
        text: faker.lorem.sentence(3),
        userId: Math.ceil(Math.random() * 10),
        receiverId: Math.ceil(Math.random() * 10),
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
      },
      {
        id: 9,
        text: faker.lorem.sentence(3),
        userId: Math.ceil(Math.random() * 10),
        receiverId: Math.ceil(Math.random() * 10),
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
      },
      {
        id: 10,
        text: faker.lorem.sentence(3),
        userId: Math.ceil(Math.random() * 10),
        receiverId: Math.ceil(Math.random() * 10),
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
      },
      {
        id: 11,
        text: faker.lorem.sentence(3),
        userId: Math.ceil(Math.random() * 10),
        receiverId: Math.ceil(Math.random() * 10),
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
      },
      {
        id: 12,
        text: faker.lorem.sentence(3),
        userId: Math.ceil(Math.random() * 10),
        receiverId: Math.ceil(Math.random() * 10),
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
      }, {
        id: 13,
        text: faker.lorem.sentence(3),
        userId: Math.ceil(Math.random() * 10),
        receiverId: Math.ceil(Math.random() * 10),
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
      },
      {
        id: 14,
        text: faker.lorem.sentence(3),
        userId: Math.ceil(Math.random() * 10),
        receiverId: Math.ceil(Math.random() * 10),
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
      },
      {
        id: 15,
        text: faker.lorem.sentence(3),
        userId: Math.ceil(Math.random() * 10),
        receiverId: Math.ceil(Math.random() * 10),
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
      },
      {
        id: 16,
        text: faker.lorem.sentence(3),
        userId: Math.ceil(Math.random() * 10),
        receiverId: Math.ceil(Math.random() * 10),
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
      },
      {
        id: 17,
        text: faker.lorem.sentence(3),
        userId: Math.ceil(Math.random() * 10),
        receiverId: Math.ceil(Math.random() * 10),
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
      }, {
        id: 18,
        text: faker.lorem.sentence(3),
        userId: Math.ceil(Math.random() * 10),
        receiverId: Math.ceil(Math.random() * 10),
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
      }, {
        id: 19,
        text: faker.lorem.sentence(3),
        userId: Math.ceil(Math.random() * 10),
        receiverId: Math.ceil(Math.random() * 10),
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
      },
            {
        id:20,
        text: faker.lorem.sentence(3),
        userId: Math.ceil(Math.random() * 10),
        receiverId: Math.ceil(Math.random() * 10),
        createdAt:moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
      },
      {
        id: 21,
        text: faker.lorem.sentence(3),
        userId: Math.ceil(Math.random() * 10),
        receiverId: Math.ceil(Math.random() * 10),
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
      },
      {
        id: 22,
        text: faker.lorem.sentence(3),
        userId: Math.ceil(Math.random() * 10),
        receiverId: Math.ceil(Math.random() * 10),
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
      },
      {
        id: 23,
        text: faker.lorem.sentence(3),
        userId: Math.ceil(Math.random() * 10),
        receiverId: Math.ceil(Math.random() * 10),
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
      },
            {
        id:24,
        text: faker.lorem.sentence(3),
        userId: Math.ceil(Math.random() * 10),
        receiverId: Math.ceil(Math.random() * 10),
        createdAt:moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
      },
            {
        id:25,
        text: faker.lorem.sentence(3),
        userId: Math.ceil(Math.random() * 10),
        receiverId: Math.ceil(Math.random() * 10),
        createdAt:moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
      },
      {
        id: 26,
        text: faker.lorem.sentence(3),
        userId: Math.ceil(Math.random() * 10),
        receiverId: Math.ceil(Math.random() * 10),
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
      },
      {
        id: 27,
        text: faker.lorem.sentence(3),
        userId: Math.ceil(Math.random() * 10),
        receiverId: Math.ceil(Math.random() * 10),
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
      },
      {
        id: 28,
        text: faker.lorem.sentence(3),
        userId: Math.ceil(Math.random() * 10),
        receiverId: Math.ceil(Math.random() * 10),
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
      },
      {
        id: 29,
        text: faker.lorem.sentence(3),
        userId: Math.ceil(Math.random() * 10),
        receiverId: Math.ceil(Math.random() * 10),
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
      },
      {
        id: 30,
        text: faker.lorem.sentence(3),
        userId: Math.ceil(Math.random() * 10),
        receiverId: Math.ceil(Math.random() * 10),
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
      }, {
        id: 31,
        text: faker.lorem.sentence(3),
        userId: Math.ceil(Math.random() * 10),
        receiverId: Math.ceil(Math.random() * 10),
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
      },
      {
        id: 32,
        text: faker.lorem.sentence(3),
        userId: Math.ceil(Math.random() * 10),
        receiverId: Math.ceil(Math.random() * 10),
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
      },
      {
        id: 33,
        text: faker.lorem.sentence(3),
        userId: Math.ceil(Math.random() * 10),
        receiverId: Math.ceil(Math.random() * 10),
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
      },
      {
        id: 34,
        text: faker.lorem.sentence(3),
        userId: Math.ceil(Math.random() * 10),
        receiverId: Math.ceil(Math.random() * 10),
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
      },
      {
        id: 35,
        text: faker.lorem.sentence(3),
        userId: Math.ceil(Math.random() * 10),
        receiverId: Math.ceil(Math.random() * 10),
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
      },
            {
        id:36,
        text: faker.lorem.sentence(3),
        userId: Math.ceil(Math.random() * 10),
        receiverId: Math.ceil(Math.random() * 10),
        createdAt:moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
      },
      {
        id: 37,
        text: faker.lorem.sentence(3),
        userId: Math.ceil(Math.random() * 10),
        receiverId: Math.ceil(Math.random() * 10),
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
      },
      {
        id: 38,
        text: faker.lorem.sentence(3),
        userId: Math.ceil(Math.random() * 10),
        receiverId: Math.ceil(Math.random() * 10),
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
      }

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('messages', null, {});
  }
};