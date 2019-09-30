
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('youtube').del()
    .then(function () {
      // Inserts seed entries
      return knex('youtube').insert([
        {id: 1, name: 'tdd bowling', url:'https://www.youtube.com/embed/GdJO2aDWayE'},
        {id: 2, name: 'tdd bowling refactor and conways', url:'https://www.youtube.com/embed/DLLoypeoQyg'},
        {id: 3, name: 'express overview', url:'https://www.youtube.com/embed/J98pM2SfNlU'},
        {id: 4, name: 'express testing and debugging 2', url:'https://www.youtube.com/embed/9caleS0ZpwQ'},
        {id: 5, name: 'testing async functions', url:'https://www.youtube.com/embed/YRjAQKN12wA'},
        {id: 6, name: 'testing handlebars',url:'https://www.youtube.com/embed/aK0pgqvpOMw'},
        {id: 7, name: 'pupparazi review',url:'https://www.youtube.com/embed/bCpkm7DPh1k'},
        {id: 8, name: 'knex introduction',url:'https://www.youtube.com/embed/qm3x49DuQkY'},
        {id: 9, name: 'testing knex',url:'https://www.youtube.com/embed/lyXqLdepnss'},
        {id: 10, name: 'knex express testing',url:'https://www.youtube.com/embed/Y3H9tZK868o'},
        {id: 11, name: 'knex many to many',url:'https://www.youtube.com/embed/QKp-CKxLdPQ'},
        {id: 12, name: 'express forms redirect',url:'https://www.youtube.com/embed/K_rHEKnQGGk'},
        {id: 13, name: 'async callbacks promises',url:'https://www.youtube.com/embed/JQlHsfNPjqY'},
        {id: 14, name: 'testing db and express',url:'https://www.youtube.com/embed/HVqBu48Dmns'},
        {id: 15, name: 'api introduction',url:'https://www.youtube.com/embed/N6K6495G6nM'},
        {id: 16, name: 'testing api routes',url:'https://www.youtube.com/embed/W5Wtfco9Ru8'},
        {id: 17, name: 'client side rendering',url:'https://www.youtube.com/embed/Gj74Kb0H56Y'},
        {id: 18, name: 'review client side rendering',url:'https://www.youtube.com/embed/ECMy3JBWOrQ'},
        {id: 19, name: 'external api overview',url:'https://www.youtube.com/embed/CZ2_SjXHJRI'},
        {id: 20, name: 'class introduction',url:'https://www.youtube.com/embed/_om6Z33gSJ0'},
        {id: 21, name: 'testing api client',url:'https://www.youtube.com/embed/yNXfXG-TVio'},
        {id: 22, name: 'react intro',url:'https://www.youtube.com/embed/x-paPk0Q3HQ'},
        {id: 23, name: 'class based components',url:'https://www.youtube.com/embed/rzR7_kkcWm4'},
        {id: 24, name: 'enzyme introduction',url:'https://www.youtube.com/embed/VoI7Oka5A5M'},
        {id: 25, name: 'react forms',url:'https://www.youtube.com/embed/0dT1DdxrBEQ'},
        {id: 26, name: 'react forms example',url:'https://www.youtube.com/embed/W3bVoNo8Iok'},
        {id: 27, name: 'redux introduction',url:'https://www.youtube.com/embed/ZqoRybd8Obo'},
        {id: 28, name: 'react redux introduction',url:'https://www.youtube.com/embed/xkZD5ayameA'},
        {id: 29, name: 'redux thunk introduction',url:'https://www.youtube.com/embed/cZ8lADXecWw'},
        {id: 30, name: 'jwt auth',url:'https://www.youtube.com/embed/k9Dw12-Za1c'},
        {id: 31, name: 'testing redux',url:'https://www.youtube.com/embed/09a6Jgh7U3A'},
        {id: 32, name: 'advanced react testing',url:'https://www.youtube.com/embed/A636ZRZJc3M'},
        {id: 33, name: 'redux thunk review',url:'https://www.youtube.com/embed/33OvNRTnf_4'},
      ]);
    });
};
