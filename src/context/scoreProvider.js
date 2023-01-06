import React, { Component } from "react";
import ScoreContext from "./scoreContext";

class ScoreProvider extends Component {
  state = {
    scores: [],
  };

  render() {
    return (
      <ScoreContext.Provider
        value={{
          scores: this.state.scores,
          addScore: (data) => {
            console.log(data);
          },
          getScores: (data) => {
            console.log(data);
          },
        }}
      >
        {this.props.children}
      </ScoreContext.Provider>
    );
  }
}

export default ScoreProvider;
