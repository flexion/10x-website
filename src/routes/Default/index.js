import React from "react";
import { Grid, Row, Col } from "components/Grid";
import PageList from "features/PageList";

const Default = () => {
  return (
    <Grid>
      <Row>
        <Col size={12}>
          <div style={{ paddingTop: "5vh", minHeight: "50vh" }}>
            <PageList />
          </div>
        </Col>
      </Row>
    </Grid>
  );
};

export default Default;
