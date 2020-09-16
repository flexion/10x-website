import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { Col, Grid, Row } from "components/Grid";

const LocationMenu = ({ key }) => {
  const { pathname } = useLocation();
  const menus = useSelector((state) => state.menu.data);
  const menu = menus.find((d) => d.key === key);

  const items = Boolean(menu)
    ? menu.items.filter((item) => item.url !== pathname)
    : [];
  if (!menu) {
    return <span className="display-none">{`Menu ${key} not found.`}</span>;
  }
  return (
    <div className="LocationMenu">
      <Grid>
        <Row gap={2} className="align-items-stretch">
          {items.map((item) => (
            <Col
              size="6"
              tablet="auto"
              desktop="auto"
              className="margin-bottom-2 tablet:margin-bottom-0"
            >
              <Link to={item.url} className="LocationMenu__item">
                <img
                  src={item.img}
                  alt={`link to ${item.text}`}
                  className="LocationMenu__item-img"
                />
                <span className="LocationMenu__item-title">{item.text}</span>
                <span className="LocationMenu__item-desc">
                  {item.description}
                </span>
              </Link>
            </Col>
          ))}
        </Row>
      </Grid>
    </div>
  );
};
LocationMenu.defaultProps = {
  key: "primary",
};
LocationMenu.propTypes = {
  key: PropTypes.string,
};

export default LocationMenu;
