'use strict';
module.exports = {
  up: (queryInterface) => {
      // Password is "Password123"
      const encrypted_password = '$2y$12$BGis0MhMzQIZ3kPQMruMpOoAMEeaOqd.t8aF3aSKwLTxcABZyh/Xq';

      await queryInterface.bulkInsert('users', [{
        id: 1,
        first_name: 'star',
        last_name: 'bbucks',
        email: 'star@bucks.com',
        encrypted_password,
        created_at,
        updated_at,
      }, {
        id: 2,
        first_name: 'burt',
        last_name: 'bees',
        email: 'burt@bees.com',
        encrypted_password,
        created_at,
        updated_at,
      }], {});
  },

  down: (queryInterface) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
