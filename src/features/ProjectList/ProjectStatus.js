import React from "react";
import PropTypes from "prop-types";
import Icon from "components/Icon";

const ProjectStatus = ({ data }) => {
  return (
    <div className="ProjectStatus phase-four">
      <div class="ProjectStatus__item">
        <span className="ProjectStatus__label">Phase 1</span>
        <span className="ProjectStatus__icon">
          <Icon icon="circle" />
        </span>
      </div>
      <div class="ProjectStatus__item">
        <span className="ProjectStatus__label">2</span>
        <span className="ProjectStatus__icon">
          <Icon icon="circle" />
        </span>
      </div>

      <div class="ProjectStatus__item">
        <span className="ProjectStatus__label">3</span>
        <span className="ProjectStatus__icon">
          <Icon icon="circle" />
        </span>
      </div>

      <div class="ProjectStatus__item current">
        <span className="ProjectStatus__label">4</span>
        <span className="ProjectStatus__icon current">
          <Icon icon="graduation-cap" />
        </span>
      </div>
    </div>
  );
};

ProjectStatus.propTypes = { data: PropTypes.object };

export default ProjectStatus;
