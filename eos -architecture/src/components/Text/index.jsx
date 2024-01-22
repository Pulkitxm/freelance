import React from "react";
import PropTypes from "prop-types";
import "./index.css";
const Text = ({text,color}) => {
  return (
    <div className="text" style={{color}}>
      {text}
    </div>
  );
};
Text.propTypes = {
    text:PropTypes.string.isRequired,
    color:PropTypes.string
};
export default Text;