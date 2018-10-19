import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      friends: [],
      picture: '',
      name: ''
    };
  }

  updatePicture(value) {
    this.setState({
      picture: value
    })
    console.log('The value of picture is: ', value)
  }

  updateName(value) {
    this.setState({
      name: value
    })
    console.log('The value for name is: ', value)
  }

  

  addFriend() {
    let { name, picture } = this.state;
    let friend = {
      name: name,
      picture: picture
    };

    let friends = this.state.friends
    friends.push(friend)

    this.setState({
      friends: friends,
      name: '',
      picture: ''
    })
  }

  render() {
    return (
      <div>

        <span>Picture:</span>
        <input onChange={e => this.updatePicture(e.target.value)} value={this.state.picture}/>

        <span>Name:</span>
        <input onChange={e => this.updateName(e.target.value)} value={this.state.name} />

        <button onClick={() => this.addFriend()}>Add Friend</button>

        {this.state.friends.map((friend, i) => {
          return (
            <div key={i}>
              <h2>{friend.name}</h2>
              <img width={200} height={200} src={friend.picture} />
            </div>
          )
        })}

      </div>
    );
  }
}

export default App;
