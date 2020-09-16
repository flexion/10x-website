import React from "react";
import PropTypes from "prop-types";
export const Loading = ({ isLoading, children }) => {
  if (isLoading) {
    return (
      <div className="Loading">
        <div className="Loading_box">
          <div className="box box-one" />
          <div className="box box-two" />
          <div className="box box-three" />
          <div className="box box-four" />
        </div>
      </div>
    );
  }
  return children;
};

Loading.propTypes = {
  isLoading: PropTypes.bool,
  message: PropTypes.node,
  children: PropTypes.node,
};

export default Loading;
