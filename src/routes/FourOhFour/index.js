import React from "react";
import { Grid, Row, Col } from "components/Grid";
import { useLocation } from "react-router-dom";

const FourOhFour = () => {
  const { pathname } = useLocation();

  return (
    <Grid>
      <Row>
        <Col size={12}>
          <div style={{ paddingTop: "5vh", minHeight: "50vh" }}>
            <h1>404</h1>
            <h2>The path "{pathname}" returned no results.</h2>
          </div>
        </Col>
      </Row>
    </Grid>
  );
};

export default FourOhFour;
