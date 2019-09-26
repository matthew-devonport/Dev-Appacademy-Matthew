
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('youtube').del()
    .then(function () {
      // Inserts seed entries
      return knex('youtube').insert([
        {id: 1, name: 'tdd bowling', url:'https://www.youtube.com/watch?v=GdJO2aDWayE&list=PLL6KkT3b5MhKLtK-UMOSANWnPo8kPmmJF'},
        {id: 2, name: 'tdd bowling refactor and conways', url:'https://www.youtube.com/watch?v=DLLoypeoQyg&list=PLL6KkT3b5MhKLtK-UMOSANWnPo8kPmmJF&index=2'},
        {id: 3, name: 'express overview', url:'https://www.youtube.com/watch?v=J98pM2SfNlU&list=PLL6KkT3b5MhKLtK-UMOSANWnPo8kPmmJF&index=3'},
        {id: 4, name: 'express testing and debugging 2', url:'https://www.youtube.com/watch?v=9caleS0ZpwQ&list=PLL6KkT3b5MhKLtK-UMOSANWnPo8kPmmJF&index=4'},
        {id: 5, name: 'testing async functions', url:'https://www.youtube.com/watch?v=YRjAQKN12wA&list=PLL6KkT3b5MhKLtK-UMOSANWnPo8kPmmJF&index=5'},
        {id: 6, name: 'testing handlebars',url:'https://www.youtube.com/watch?v=aK0pgqvpOMw&list=PLL6KkT3b5MhKLtK-UMOSANWnPo8kPmmJF&index=6'},
        {id: 7, name: 'pupparazi review',url:'https://www.youtube.com/watch?v=bCpkm7DPh1k&list=PLL6KkT3b5MhKLtK-UMOSANWnPo8kPmmJF&index=7'},
        {id: 8, name: 'knex introduction',url:'https://www.youtube.com/watch?v=qm3x49DuQkY&list=PLL6KkT3b5MhKLtK-UMOSANWnPo8kPmmJF&index=8'},
        {id: 9, name: 'testing knex',url:'https://www.youtube.com/watch?v=lyXqLdepnss&list=PLL6KkT3b5MhKLtK-UMOSANWnPo8kPmmJF&index=9'},
        {id: 10, name: 'knex express testing',url:'https://www.youtube.com/watch?v=Y3H9tZK868o&list=PLL6KkT3b5MhKLtK-UMOSANWnPo8kPmmJF&index=10'},
        {id: 11, name: 'knex many to many',url:'https://www.youtube.com/watch?v=QKp-CKxLdPQ&list=PLL6KkT3b5MhKLtK-UMOSANWnPo8kPmmJF&index=11'},
        {id: 12, name: 'express forms redirect',url:'https://www.youtube.com/watch?v=K_rHEKnQGGk&list=PLL6KkT3b5MhKLtK-UMOSANWnPo8kPmmJF&index=12'},
        {id: 13, name: 'async callbacks promises',url:'https://www.youtube.com/watch?v=JQlHsfNPjqY&list=PLL6KkT3b5MhKLtK-UMOSANWnPo8kPmmJF&index=13'},
        {id: 14, name: 'testing db and express',url:'https://www.youtube.com/watch?v=HVqBu48Dmns&list=PLL6KkT3b5MhKLtK-UMOSANWnPo8kPmmJF&index=14'},
        {id: 15, name: 'api introduction',url:'https://www.youtube.com/watch?v=N6K6495G6nM&list=PLL6KkT3b5MhKLtK-UMOSANWnPo8kPmmJF&index=15'},
        {id: 16, name: 'testing api routes',url:'https://www.youtube.com/watch?v=W5Wtfco9Ru8&list=PLL6KkT3b5MhKLtK-UMOSANWnPo8kPmmJF&index=16'},
        {id: 17, name: 'client side rendering',url:'https://www.youtube.com/watch?v=Gj74Kb0H56Y&list=PLL6KkT3b5MhKLtK-UMOSANWnPo8kPmmJF&index=17'},
        {id: 18, name: 'review client side rendering',url:'https://www.youtube.com/watch?v=ECMy3JBWOrQ&list=PLL6KkT3b5MhKLtK-UMOSANWnPo8kPmmJF&index=18'},
        {id: 19, name: 'external api overview',url:'https://www.youtube.com/watch?v=CZ2_SjXHJRI&list=PLL6KkT3b5MhKLtK-UMOSANWnPo8kPmmJF&index=19'},
        {id: 20, name: 'class introduction',url:'https://www.youtube.com/watch?v=_om6Z33gSJ0&list=PLL6KkT3b5MhKLtK-UMOSANWnPo8kPmmJF&index=20'},
        {id: 21, name: 'testing api client',url:'https://www.youtube.com/watch?v=yNXfXG-TVio&list=PLL6KkT3b5MhKLtK-UMOSANWnPo8kPmmJF&index=21'},
        {id: 22, name: 'react intro',url:'https://www.youtube.com/watch?v=x-paPk0Q3HQ&list=PLL6KkT3b5MhKLtK-UMOSANWnPo8kPmmJF&index=22'},
        {id: 23, name: 'class based components',url:'https://www.youtube.com/watch?v=rzR7_kkcWm4&list=PLL6KkT3b5MhKLtK-UMOSANWnPo8kPmmJF&index=23'},
        {id: 24, name: 'enzyme introduction',url:'https://www.youtube.com/watch?v=VoI7Oka5A5M&list=PLL6KkT3b5MhKLtK-UMOSANWnPo8kPmmJF&index=24'},
        {id: 25, name: 'react forms',url:'https://www.youtube.com/watch?v=0dT1DdxrBEQ&list=PLL6KkT3b5MhKLtK-UMOSANWnPo8kPmmJF&index=25'},
        {id: 26, name: 'react forms example',url:'https://www.youtube.com/watch?v=W3bVoNo8Iok&list=PLL6KkT3b5MhKLtK-UMOSANWnPo8kPmmJF&index=26'},
        {id: 27, name: 'redux introduction',url:'https://www.youtube.com/watch?v=ZqoRybd8Obo&list=PLL6KkT3b5MhKLtK-UMOSANWnPo8kPmmJF&index=27'},
        {id: 28, name: 'react redux introduction',url:'https://www.youtube.com/watch?v=xkZD5ayameA&list=PLL6KkT3b5MhKLtK-UMOSANWnPo8kPmmJF&index=28'},
        {id: 29, name: 'redux thunk introduction',url:'https://www.youtube.com/watch?v=cZ8lADXecWw&list=PLL6KkT3b5MhKLtK-UMOSANWnPo8kPmmJF&index=29'},
        {id: 30, name: 'jwt auth',url:'https://www.youtube.com/watch?v=k9Dw12-Za1c&list=PLL6KkT3b5MhKLtK-UMOSANWnPo8kPmmJF&index=30'},
        {id: 31, name: 'testing redux',url:'https://www.youtube.com/watch?v=09a6Jgh7U3A&list=PLL6KkT3b5MhKLtK-UMOSANWnPo8kPmmJF&index=31'},
        {id: 32, name: 'advanced react testing',url:'https://www.youtube.com/watch?v=A636ZRZJc3M&list=PLL6KkT3b5MhKLtK-UMOSANWnPo8kPmmJF&index=32'},
        {id: 33, name: 'redux thunk review',url:'https://www.youtube.com/watch?v=33OvNRTnf_4&list=PLL6KkT3b5MhKLtK-UMOSANWnPo8kPmmJF&index=33'},
      ]);
    });
};
