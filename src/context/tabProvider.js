import React, { Component } from "react";
import TabContext from "./tabContext";

const mockTabData = {
  ETH: { id: 1, key: "Ethereum", title: "Ethereum" },
  BTC: { id: 2, key: "Bitcoin", title: "BTC" },
  APE: { id: 3, key: "Apecoin", title: "APE" },
};

class TabProvider extends Component {
  state = {
    tabsData: mockTabData,
    active_tab_id: "Ethereum",
  };

  render() {
    return (
      <TabContext.Provider
        value={{
          ...this.state,
          setActiveTab: (data) => {
            this.setState({
              active_tab_id: data,
            });
          },
          getTabsData: (data) => {
            console.log(data);
          },
        }}
      >
        {this.props.children}
      </TabContext.Provider>
    );
  }
}

export default TabProvider;
