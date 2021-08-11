import React from "react";
import ReactDom from "react-dom";

const Modal = (props) => {
  return ReactDom.createPortal(
    <div className="ui dimmer modals visible active">
      <div className="ui standard modal visible active">
        See you Space Cowboy!!!
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
