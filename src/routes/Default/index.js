import React from "react";
import { Grid, Row, Col } from "components/Grid";
import PageList from "features/PageList";
import Loading from "components/Loading";

const Default = () => {
  return (
    <Grid>
      <Row>
        <Col size={12}>
          <div style={{ paddingTop: "5vh", minHeight: "50vh" }}>
            <h1>Fund your idea</h1>
            <Loading isLoading={true}>Not loading</Loading>
            <PageList />
          </div>
        </Col>
      </Row>
    </Grid>
  );
};

export default Default;
