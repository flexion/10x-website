import React from "react";
import PropTypes from "prop-types";
import ContentList from "features/ContentList";
import Card from "components/Card";
import { Row } from "components/Grid";

const ProjectCard = ({ data }) => {
  return (
    <Card
      className="ProjectCard tablet:grid-col-6"
      title={data.title}
      subtitle={data.subtitle}
      meta={`Type: ${data.projectType}`}
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

const ProjectList = ({ type }) => {
  return (
    <Row className="flex-justify-center" gap="2">
      <ContentList type={type} render={ProjectCard} />
    </Row>
  );
};

ProjectList.defaultProps = {
  type: "project",
};

ProjectList.propTypes = {
  type: PropTypes.string,
};

export default ProjectList;
