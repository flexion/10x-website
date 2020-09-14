import React from "react";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import close from "uswds/dist/img/close.svg";
import Button from "components/Button";
import "uswds";

const NavItem = ({ id, text, url, items = [] }) => {
  return (
    <li className="usa-nav__primary-item">
      {items.length ? (
        <div>
          <button
            className={`usa-accordion__button usa-nav__url`}
            aria-controls={`extended-nav-section-${id}`}
            aria-expanded={false}
          >
            <span>{text}</span>
          </button>
          <ul
            id={`extended-nav-section-${id}`}
            className="usa-accordion__content usa-nav__submenu"
            hidden
          >
            {items.map((item, idx) => (
              <li key={idx} className="usa-nav__submenu-item">
                <Link to={item.url}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <NavLink
          className="usa-nav__url"
          activeClassName="usa-current"
          to={url}
        >
          <span>{text}</span>
        </NavLink>
      )}
    </li>
  );
};

const Nav = ({ items }) => {
  return (
    <nav role="navigation" aria-label="Primary navigation" className="usa-nav">
      <div className="usa-nav__inner">
        <Button type="button" variant="url" className="usa-nav__close">
          <img src={close} alt="close" />
        </Button>
        <ul className="usa-accordion usa-nav__primary">
          {items.map(({ text = "", url = "", items = [] }, idx) => {
            return (
              <NavItem
                key={`usa-nav-item-${idx}`}
                id={idx}
                text={text}
                url={url}
                items={items}
              />
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

Nav.defaultProps = {
  items: [],
};

Nav.propTypes = {
  items: PropTypes.array,
};

export default Nav;
