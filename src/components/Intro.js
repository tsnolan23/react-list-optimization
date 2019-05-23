import React from "react";

const Intro = () => (
  <div className="intro">
    <h1 className="intro__title">React List Optimzations</h1>
    <p className="intro__desc">
      Using a combination of React's memo, useReducer and useCallback, we can
      ensure only the items that changed below are actually re-rendered. Using
      the React Dev Tools's highlight updates feature, you can observe the
      difference in re-renders below.
    </p>
  </div>
);

export default Intro;
