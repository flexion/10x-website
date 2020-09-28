import React from "react";
import PropTypes from "prop-types";
import ContentList from "features/ContentList";
import ProjectCard from "./ProjectCard";

const ProjectList = () => {
  return (
    <div className="ProjectList">
      <ContentList type="project" render={ProjectCard} />
    </div>
  );
};

ProjectList.propTypes = {
  type: PropTypes.string,
};

export default ProjectList;
