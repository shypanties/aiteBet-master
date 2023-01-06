import React, { Component } from "react";
import { map } from "lodash";

import "../styles/tabwrapper.css";

class Tabs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  render() {
    const { handleTabSwitch, tabData } = this.props;
    const { active_tab_id } = tabData;
    return (
      <div className="tabs-wrapper">
        {map(tabData.tabsData, (each, id, index) => {
          const isActive = each.key === active_tab_id;
          const isLeftEdge = each.id === 1;
          const isRightEdge = each.id === Object.keys(tabData.tabsData).length;
          return (
            <span
              key={each.id}
              className={`individual-tab-wrapper ${
                isLeftEdge && "tab-left-edge"
              } ${isRightEdge && "tab-right-edge"} `}
              style={isActive ? { fontStyle: "italic" } : null}
              onClick={() => handleTabSwitch(each.key)}
            >
              <h3 style={{ margin: 0 }}>{each.title} </h3>
            </span>
          );
        })}
      </div>
    );
  }
}

export default Tabs;
