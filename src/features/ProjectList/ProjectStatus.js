import React from "react";
import PropTypes from "prop-types";
import Icon from "components/Icon";
import classnames from "classnames";

const PhaseItem = ({ isCurrent, isInert, data, label }) => {
  return (
    <div
      class={classnames({
        ProjectStatus__item: true,
        inert: isInert,
        current: isCurrent,
        inProgress: true,
        complete: true,
        graduated: true,
      })}
    >
      <span className="ProjectStatus__label">{label}</span>
      <span className="ProjectStatus__icon">
        <Icon
          icon={data.status === "3" && isCurrent ? "graduation-cap" : "circle"}
          variant={data.status === "1" && isCurrent ? "regular" : "solid"}
        />
      </span>
    </div>
  );
};

const phases = {
  1: {
    label: "Phase 1",
    className: "phase-one",
  },
  2: {
    label: "2",
    className: "phase-two",
  },
  3: { label: "3", className: "phase-three" },
  4: { label: "4", className: "phase-four" },
};

const ProjectStatus = ({ data }) => {
  return (
    <div className="ProjectStatus">
      <div
        className={classnames({
          ProjectStatus__bar: true,
          [phases[data.phase].className]: true,
          graduated: data.status === "3",
        })}
      >
        {Object.entries(phases).map(([phase, value]) => {
          return (
            <PhaseItem
              isCurrent={phase === data.phase}
              isInert={phase > data.phase}
              label={value.label}
              data={data}
            />
          );
        })}
      </div>
    </div>
  );
};

ProjectStatus.propTypes = { data: PropTypes.object };

export default ProjectStatus;
