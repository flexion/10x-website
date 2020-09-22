import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPage } from "app/ContentModule";
import { Grid } from "components/Grid";
import Loading from "components/Loading";
import Mdx from "features/Mdx";

const Page = ({ name }) => {
  const dispatch = useDispatch();
  const params = useParams();
  const pageName = name ? name : params.name;
  const page = useSelector((state) => state.content.page);
  useEffect(() => {
    dispatch(getPage({ name: pageName }));
  }, [dispatch, pageName]);
  const { pending, data, error } = page;
  if (pending) {
    return (
      <Grid>
        <div style={{ paddingTop: "15vh", paddingBottom: "15vh" }}>
          <Loading isLoading={true}>
            <span />
          </Loading>
        </div>
      </Grid>
    );
  }
  if (error) {
    return (
      <Grid className="padding-y-6">
        <h1 className="Page__error">
          Error: There was an error loading this page.
        </h1>
      </Grid>
    );
  }
  return (
    <div className={`TxContent Tx__${pageName}`}>
      <Mdx>{data.body}</Mdx>
    </div>
  );
};

export default Page;
