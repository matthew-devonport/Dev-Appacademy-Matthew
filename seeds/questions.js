
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('questions').del()
    .then(function () {
      // Inserts seed entries
      return knex('questions').insert([
        {id: 1, question: 'What is a weird habit that you have?'},
        {id: 2, question: 'What is your first memory?'},
        {id: 3, question: 'What\'s the best meal you\'ve ever had'},
        {id: 4, question: 'If you could invent any gadget, what would it be?'},
        {id: 5, question: 'If you could travel back in time to any point, when would it be and why?'},
        {id: 6, question: 'If you could wear a device that would show you a single piece of information about everyone you looked at, what thing would you want to see hovering above their head?'},
        {id: 7, question: 'What advice would you have for your thirteen year old self?'},
        {id: 8, question: 'What is a mindblowing experience in your life?'},
        {id: 9, question: 'Earth, wind, water and fire; which one are you and why?'},
        {id: 10, question: 'When was a time you found yourself in trouble?'},
        {id: 11, question: 'What is a pet peeve of yours?'},
        {id: 12, question: 'Tell us about your first pet, if you\'ve never had a pet; describe your ideal pet'},
        {id: 13, question: 'What fruit represents your personality?'},
        {id: 14, question: 'What is your favourite tree?'},
        {id: 15, question: 'If you were an animal, what would you be and why?'},
        {id: 16, question: 'What is the name of an online alias you no longer use?'},
        {id: 17, question: 'What was the first job you ever had?'},
        {id: 18, question: 'If you had your own talk show, who would be your first guest?'},
        {id: 19, question: 'If you were on the cover of a magazine, which one would it be and why?'}
      ]);
    });
};