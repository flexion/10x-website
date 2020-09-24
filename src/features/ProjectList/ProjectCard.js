import React from "react";
import PropTypes from "prop-types";
import Card from "components/Card";
import ProjectStatus from "./ProjectStatus";

const ProjectCard = ({ data }) => {
  return (
    <Card
      className="ProjectCard"
      title={data.title}
      subtitle={data.subtitle}
      meta={`Type: ${data.projectType}`}
      footer={<ProjectStatus data={data.phaseData} />}
    >
      <div className="ProjectCard__excerpt">{data.excerpt}</div>
      {data.topics && (
        <div className="ProjectCard__topics">
          <span className="ProjectCard__topics-heading">Topics & Audience</span>
          {data.topics.split(",").map((item) => (
            <span className="ProjectCard__tag">{item}</span>
          ))}
        </div>
      )}
    </Card>
  );
};

ProjectCard.propTypes = {
  data: PropTypes.object,
};

export default ProjectCard;
