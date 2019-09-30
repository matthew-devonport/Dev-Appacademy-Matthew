- GENERAL
  - delete branches once they've been merged into master
- SERVER
  - (DONE) index.js needs to listen for a port from process.env 
  - it looks like this hasn't been deployed to heroku yet, I suggest you do that asap so you aren't debugging at the last minute
  - (DONE) html title in public/index.html still says fruits
  - (DONE) none of the routes have catch methods on the db calls - add them in case there is adb error
  - (DONE) there is no test for the /api/v1/jv route
  - (DONE) in the server tests you could make the mock db functions jest mocks so you can test whether they were called instead of just counting the number of items they return - like you did with getQuotesByName
  - there are a lot of seeds in the test database, in the future just add the minimum to let you test the functionality
- CLIENT
  - (DONE) App test is failing, delete it
  - Where are the component tests??
  - (DONE) apiClient / getVideos doesn't use the name param - try getVideos(name='jv') for a default
  - in the ollie component don't store html elements in the state - just store the questions and then map over them in your render method
  - for Ollie, put the name, top, left vars at the top of hte page like in Kelly's room
  - console.log in jv component (you'd better be trolling....)
  - in JV setupPopup I would just store the src value of the iframe in the state and then build the popupContent var in the render method - stashing it on the component object is messy
  - MainRoom is acting like your App component in that it is conditionally displaying all the rooms as well as showing the actual mainroom - I'd suggest separating that functionality into two separate components (perhaps bring App back)
  - in Han component avoid storing mindfulness html on component - build it in render with a helper method
  - (DONE) in PopupBox you don't ned to store the content in the state - just change line 14 to `let {content} = this.props` and delete the constructor
  - (DONE) in QuoteBox don't set the css directly in the componentDidMount - pass in an inline style in the render method - e.g. `<div id="quote-box" style={{top: this.props.quoteBox.top //etc/}}>`



