import React, { Component } from 'react';

export default class FilterString extends Component {

  constructor() {
    super();

    this.state = {
      games: ["Escape From Tarkov", "PUBG", "Hellblade", "Rocketleague"],
      userInput: '',
      filteredGames: []
    }
  }

  handleChange(val) {
    this.setState({userInput: val})
  }

  filterGames(userInput) {
    var games = this.state.games;
    var filteredGames = [];

    for (var i = 0; i < games.length; i++) {
      if (games[i].includes(userInput)) {
        filteredGames.push(games[i])
      }
    }
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText">Games: { JSON.stringify(this.state.games, null, 10) }</span>
        <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}></input>
        <button className="confirmationButton" onCLick={() => this.FilterString(this.state.userInput)}>Filter</button>
        <span className="resultsBox filterStringRB">Filtered Games: { JSON.stringify(this.state.filteredGames, null, 10) }</span>
      </div>
    )
  }
}