import React from "react";

const DelayedButton = (props) => (
  <div>
    <button
      onClick={(e) => {
        e.persist();
        window.setTimeout(() => {
          props.onDelayedClick(e);
        }, props.delay);
      }}
    ></button>
  </div>
);

export default DelayedButton;
