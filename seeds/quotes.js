
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('quotes').del()
    .then(function () {
      // Inserts seed entries
      return knex('quotes').insert([
        {id: 1, name: 'Ollie', quote: 'Great hustle out there'},
        {id: 2, name: 'Ollie', quote: 'I mean I wouldn\'t call myself a professional'},
        {id: 3, name: 'Ollie', quote: 'Nic I am *this close* to kicking you off the course'},
        {id: 4, name: 'Ollie', quote: 'We\'re all friends here, my fetish is.....'},
        {id: 5, name: 'JV', quote: 'Did you just commit a console.log? You\'re fired'},
        {id: 6, name: 'JV', quote: 'Only monkeys test manually'},
        {id: 7, name: 'JV', quote: '*checks watch*'},
        {id: 8, name: 'JV', quote: '*thunk*.... It\'s like a rolling pin hitting a cabbage'},
        {id: 9, name: 'JV', quote: 'Most importantly, have fun!'},
        {id: 10, name: 'Han', quote: 'Niiiiice'},
        {id: 11, name: 'Han', quote: 'I\'m so sorry'},
        {id: 12, name: 'Han', quote: 'Yeaaaaah'},
        {id: 13, name: 'Kelly', quote: 'My cohort was the best cohort'},
        {id: 14, name: 'Kelly', quote: 'Look puppies!'},
        {id: 15, name: 'Sarrah', quote: 'What are your needs?'},
        {id: 16, name: 'Sarrah', quote: 'That\'s toootally normal'},
        {id: 17, name: 'Sarrah', quote: 'How are you feeling?'},
        {id: 18, name: 'Sarrah', quote: 'Trust the process'},
        {id: 19, name: 'Ollie', quote: 'I\'m pretty susceptible to peer-pressure'},
        {id: 20, name: 'Kelly', quote: 'Sweet!'},
        {id: 21, name: 'Kelly', quote: 'That\'s cool, it works!'},
        {id: 23, name: 'Han', quote: 'I\'m very easy to frighten!'},
        {id: 24, name: 'Han', quote: 'Yeah! I\'m into that!'}, 
        {id: 25, name: 'Sarrah', quote: 'Take your time'},
        {id: 26, name: 'JV', quote: 'Put it as a wrapper, which means you lay sick beats!'},
        {id: 27, name: 'Kelly', quote: 'Try looking at it this way...'},
        {id: 28, name: 'Ollie', quote: 'I feel like everyone is picking on me'},
        {id: 29, name: 'Han', quote: '*Uncontrollable laughter*'},
        {id: 30, name: 'Sarrah', quote: 'Feel free to approach me at anytime'},
        {id: 31, name: 'JV', quote: 'Any questions or comments about this code?'},
        {id: 32, name: 'Kelly', quote: 'So.... How about trying this...'},
        {id: 33, name: 'Han', quote: 'I don\'t know why I said that!'},
        {id: 34, name: 'Ollie', quote: 'Let\'s get it done team!'}
      ]);
    });
};
