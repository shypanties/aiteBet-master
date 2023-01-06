import React, { useState, useContext, useEffect } from "react";
import { withRouter } from "react-router-dom";

import "./styles/landing.css";

import { extractUrlPath } from "./utils/navigation";

import scoreService from "./services/scoreService";
import tabContext from "./context/tabContext";

import Leaderboard from "./components/leaderboard";
import Tabs from "./components/tabwrapper";
import Modal from "./components/addscoremodal";

const LandingPage = ({ location, history }) => {
  const [showModal, toggleModal] = useState(false);
  const tabData = useContext(tabContext);
  useEffect(() => {
    if (
      extractUrlPath(location.pathname) &&
      extractUrlPath(location.pathname) !== tabData.active_tab_id
    ) {
      tabData.setActiveTab(extractUrlPath(location.pathname));
    }
  }, [tabData, location]);

  const handleTabSwitch = (key) => {
    tabData.setActiveTab(key);
    history.push(`/${key}`);
  };

  const handleAddScore = async (data) => {
    // TODO REFACTOR THIS OUT TO A MODAL HOC
    // TODO: figure out optimistic loading here - using context?
    let newScore = await scoreService.createNewScore(data);
    toggleModal(false);
  };
  return (
    <div className="landing">
      <Tabs handleTabSwitch={(key) => handleTabSwitch(key)} tabData={tabData} />
      <Leaderboard toggleModal={(val) => toggleModal(val)} tabData={tabData} />
      <Modal
        show={showModal}
        handleClose={() => toggleModal(false)}
        handleSubmit={(data) => handleAddScore(data)}
      />
    </div>
  );
};

export default withRouter(LandingPage);
