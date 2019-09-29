
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {id: 1, name: 'Alex Abernethy', knownFor: 'Stickability'},
        {id: 2, name: 'Ava Blackwood', knownFor: 'Creativity'},
        {id: 3, name: 'Caleb Thompson', knownFor: 'Intelligence'},
        {id: 4, name: 'Chloe Seun', knownFor: 'Focus'},
        {id: 5, name: 'July Lahpai', knownFor: 'Commitment'},
        {id: 6, name: 'Linh Pham', knownFor: 'Endurance'},
        {id: 7, name: 'Maria Rose', knownFor: 'Kindness'},
        {id: 8, name: 'Matt Devonport', knownFor: 'Supportiveness'},
        {id: 9, name: 'Nic Matthews', knownFor: 'Good Humour'},
        {id: 10, name: 'Noemie Ariste', knownFor: 'Diligence'},
        {id: 11, name: 'Rose Dhlakama', knownFor: 'Self-Assurance'},
        {id: 12, name: 'Sylvia Gilbert-Potts', knownFor: 'Loudness'},
        {id: 13, name: 'Will Houghton', knownFor: 'Determination'},
      ]);
    });
};
