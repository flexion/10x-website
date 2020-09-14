import React from "react";
import PropTypes from "prop-types";
import { Grid, Row, Col } from "components/Grid";
import Banner from "components/Banner";

const Header = ({ logo, nav }) => {
  return (
    <header className="usa-header usa-header--basic">
      <Grid>
        <Row>
          <Col>
            <Banner />
            <Row className="align-content-center margin-top-2">
              <Col desktop={3}>{logo}</Col>
              <Col desktop={9}>{nav}</Col>
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
