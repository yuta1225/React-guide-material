import "./Child.css";
import React from "react";

const Child = () => {
  return (
    <React.Fragment>
      <div className="component">
        <h3>Hello Component</h3>
      </div>
      <h3>Hello Fragment</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro facilis ad distinctio fuga optio consequatur vel eaque, ratione, est voluptatem, delectus harum accusantium magni atque cumque blanditiis officia expedita ab.</p>
    </React.Fragment>
  );
};

export default Child;
