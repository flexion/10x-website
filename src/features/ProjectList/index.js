import React from "react";
import PropTypes from "prop-types";
import ContentList from "features/ContentList";
import ProjectCard from "./ProjectCard";

const ProjectList = ({ type }) => {
  return (
    <div className="ProjectList">
      <ContentList type={type} render={ProjectCard} />
    </div>
  );
};

ProjectList.defaultProps = {
  type: "project",
};

ProjectList.propTypes = {
  type: PropTypes.string,
};

export default ProjectList;
