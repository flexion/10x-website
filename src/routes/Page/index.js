import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPage } from "app/ContentModule";
import Loading from "components/Loading";
import { useParams } from "react-router-dom";
import LocationMenu from "features/LocationMenu";

const Page = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { name } = params;
  const page = useSelector((state) => state.content.page);
  useEffect(() => {
    dispatch(getPage({ name }));
  }, [dispatch, name]);
  const { pending, data, error } = page;
  return (
    <>
      <h1>PAGE</h1>
      <Loading isLoading={pending}>
        {error !== null ? (
          <h1 className="Page__error">{error.message}</h1>
        ) : (
          <h1 className="Page__title">{data.title}</h1>
        )}
      </Loading>
      <LocationMenu />
    </>
  );
};

export default Page;
