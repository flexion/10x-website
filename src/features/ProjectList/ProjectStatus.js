import React from "react";
import PropTypes from "prop-types";
import Icon from "components/Icon";
import classnames from "classnames";

const PhaseItem = ({ data, phase, label }) => {
  const isCurrent = phase === data.phase;
  const isInert = phase > data.phase;

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
      <span
        className={classnames({
          ProjectStatus__icon: true,
          "c-one": phase === "1",
          "c-two": phase === "2" && data.phase === "2",
          "c-three-two": phase === "2" && data.phase === "3",
          "c-four-two": phase === "2" && data.phase === "4",
          "c-four-three": phase === "3" && data.phase === "4",
          "c-four": phase === "4" && data.phase === "4",
        })}
      >
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
        {Object.entries(phases).map(([key, value], i) => {
          return (
            <PhaseItem
              key={`PhaseItem__item-${key}`}
              className={classnames({})}
              isCurrent={key === data.phase}
              isInert={key > data.phase}
              label={value.label}
              data={data}
              phase={key}
            />
          );
        })}
      </div>
    </div>
  );
};

ProjectStatus.propTypes = { data: PropTypes.object };

export default ProjectStatus;
