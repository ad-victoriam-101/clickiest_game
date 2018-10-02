import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import NavTitle from "./components/NavTitle"
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    message: "Click a friend to begin",
    topScore: 0,
    currentScore: 0,
    unselectedFriends: friends
  };
  componentDidMount(){
    
  }

  shuffleFriends = array=>{
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
  }
  // This takes the array of (friends) and for each item in the array, re-arranges the indecies of it by assigning it to a place holder. 

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };
  selectFriend = id =>{
    const findFriend = this.state.unselectedFriends.find(friend => friend.id === id);
    if(findFriend === undefined) {
      // failure to find the corret friend.
      this.setState({
        message: "You guessed Incorrectly! try again please :)",
        topScore: (this.state.currentScore > this.state.topScore) ? this.state.currentScore : this.state.topScore,
        currentScore: 0,
        friends,
        unselectedFriends: friends
      })
    } else {
      const newFriends = this.state.unselectedFriends.filter(friend => friend.id !== id);
      this.setState({
        message:"You Correctly Guessed! Keep Going!",
        currentScore: this.state.currentScore + 1,
        friends,
        unselectedFriends: newFriends
      })
    }
    this.shuffleFriends(friends);
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <NavTitle
          message = {this.state.message}
          currentScore = {this.state.currentScore}
          topScore = {this.state.topScore}
          />
        <Title>Friends List</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            selectFriend={this.selectFriend}
            id={friend.id}
            key={friend.id}
            image={friend.image}
            currentScore = {this.state.currentScore}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
