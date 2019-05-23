import React, { useState } from "react";

import Intro from "./Intro";
import List from "./List";
import GitHubLink from "./GitHubLink";
import Toggle from "./Toggle";

import DATA from "../data";

const App = () => {
  const [useMemoedItem, toggleUseMemoedItem] = useState(true);
  return (
    <div>
      <Intro />
      <Toggle isChecked={useMemoedItem} onChange={toggleUseMemoedItem} />
      <List items={DATA} useMemoedItem={useMemoedItem} />
      <GitHubLink />
    </div>
  );
};

export default App;
