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
  return (
    <Loading isLoading={pending}>
      {error !== null ? (
        <Grid>
          <h1 className="Page__error">
            Error: There was an error loading this page.
          </h1>
        </Grid>
      ) : (
        <Mdx>{data.body}</Mdx>
      )}
    </Loading>
  );
};

export default Page;
