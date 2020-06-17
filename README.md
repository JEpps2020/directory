Navbar/Jumbo Tron
Search form Component - user input
Search results - data
search.js pupster
search form.js pupster
search results - call rolls and cols in here
container
rows & cols components
look at about.js for rows and columns
Friends refactor - look at app.js 
instead of remove friend - sort instead of filter and sort through anything
Pass into search results component in app.js props.friends -passing the props to the search results component
search reulsts will be name, phone, email, dob
# directory
This is the week-19 homework.

APP.JS -sort
  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  pass the sorted friends into the search results component

      <SearchResults results={this.state.friends} /> - in render