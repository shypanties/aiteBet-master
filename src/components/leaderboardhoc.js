import React, { Component } from "react";
import scoreService from "../services/scoreService";

function withComponentAPI(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: false, // TODO loading true on site page load? or on tab changes
        scoreData: [],
      };
    }

    componentDidMount() {
      this.getProducts();
    }

    getProducts = async () => {
      let scoreData = await scoreService.fetchAllScores();
      this.setState({
        scoreData,
      })
    };

    render() {
      const { scoreData } = this.state;
      const { tabData, toggleModal } = this.props;
      const passedProps = {
        scoreData,
        tabData,
        toggleModal,
      };

      return <WrappedComponent {...passedProps} />;
    }
  };
}

export default withComponentAPI;
