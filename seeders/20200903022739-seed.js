'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Owners', [{
      email: "a@a",
      password: "a",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Owners', null, {});
  }
};

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Parkings', [
      {
        ownerId: 1,
        name: "リパーク 日本橋1丁目",
        postcode: 1030027,
        address: "東京都中央区日本橋1-8-2",
        lat: 35.6834647,
        lng: 139.7734504,
        capacity: 2,
        price: "08:00-22:00 15分/300円\r\n22:00-08:00 60分/100円\r\n【最大料金】4時間以内3000円",
        status: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ownerId: 1,
        name: "リパーク 日本橋3丁目第2",
        postcode: 1030027,
        address: "東京都中央区日本橋3-8-9",
        lat: 35.6800524,
        lng: 139.7715347,
        capacity: 2,
        price: "[月-土]\r\n08:00-22:00 15分/400円\r\n22:00-08:00 60分/200円\r\n[日祝]\r\n08:00-22:00 15分/400円\r\n22:00-08:00 60分/200円\r\n【最大料金】\r\n[日祝]\r\n8:00-22:00 2000円",
        status: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ownerId: 1,
        name: "タイムズ 日本橋2丁目第3",
        postcode: 1030027,
        address: "東京都中央区日本橋2-10",
        lat: 35.680885,
        lng: 139.7726305,
        capacity: 3,
        price: "08:00-22:00 12分/440円\r\n22:00-08:00 60分/110円",
        status: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ownerId: 1,
        name: "タイムズ 日本橋3丁目第2",
        postcode: 1030027,
        address: "東京都中央区日本橋3-12",
        lat: 35.6786327,
        lng: 139.7720931,
        capacity: 33,
        price: "[全日]\r\n00:00-00:00 12分/440円\r\n【最大料金】\r\n[月-土]\r\n08:00-19:00 3520円\r\n19:00-08:00 550円\r\n[日祝]08:00-19:00 1870円\r\n19:00-08:00 550円",
        status: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Parkings', null, {});
  }
};
