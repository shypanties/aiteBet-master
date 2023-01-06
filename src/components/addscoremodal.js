import React, { useState, useEffect, useContext } from "react";

import tabContext from "../context/tabContext";

import TextInput from "./textinput";
import Dropdown from "./dropdown";

import "../styles/addscoremodal.css";

//TODO: refactor
const invalidName = (value) => {
  if (!value || value.length < 3) {
    return true;
  }
  return false;
};
const invalidScore = (value) => {
  if (!value || isNaN(parseInt(value, 10))) {
    return true;
  }
  return false;
};

const AddScoreModal = ({ handleClose, show, handleSubmit }) => {
  const [username, setUsername] = useState("");
  const [score, setScore] = useState("");
  const [type, setType] = useState("");
  const tabData = useContext(tabContext);

  useEffect(() => {
    if (tabData.active_tab_id !== type) {
      setType(tabData.active_tab_id);
    }
  }, [tabData]);
  const invalid = invalidName(username) || invalidScore(score);
  const onSubmit = (e) => {
    e.preventDefault();
    if (invalid) {
      return null;
    }
    const time = new Date(); // TODO - update for BE?
    handleSubmit({ username, score, type, time });
  };
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <button onClick={handleClose} className="close-btn">
          X
        </button>
        <form onSubmit={onSubmit} className="form">
          <p>ADD NEW SCORE</p>
          <Dropdown
            id="types"
            value={type}
            onChange={(value) => {
              setType(value);
            }}
          />
          <TextInput
            title="username"
            value={username}
            onChange={(val) => setUsername(val)}
          />
          <TextInput
            title="score"
            value={score}
            onChange={(val) => setScore(val)}
          />
          <input type="submit" value="Submit" className="add-button" />
        </form>
      </section>
    </div>
  );
};

export default AddScoreModal;
