import React from "react";
import { Grid, Row, Col } from "components/Grid";
import PageList from "features/PageList";
import LocationMenu from "features/LocationMenu";

const Default = () => {
  return (
    <>
      <Grid>
        <Row>
          <Col size={12}>
            <div style={{ paddingTop: "5vh", minHeight: "50vh" }}>
              <h1>Fund your idea</h1>
              <PageList />
            </div>
          </Col>
        </Row>
      </Grid>
      <LocationMenu />
    </>
  );
};

export default Default;
