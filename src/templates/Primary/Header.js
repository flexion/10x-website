import React from "react";
import PropTypes from "prop-types";
import { Grid, Row, Col } from "components/Grid";
import Banner from "components/Banner";
import { Link } from "react-router-dom";

const Header = ({ logo, nav }) => {
  return (
    <header className="usa-header usa-header--basic">
      <Grid>
        <Row>
          <Col>
            <Banner />
            <Row className="align-content-center margin-top-2">
              <Col size={3}>
                <Link to="/">{logo}</Link>
              </Col>
              <Col size={9} className="text-right">
                {nav}
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    </header>
  );
};

Header.propTypes = {
  logo: PropTypes.node,
  nav: PropTypes.node,
};

export default Header;
