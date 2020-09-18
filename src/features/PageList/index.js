import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { getList } from "app/ContentModule";
import Loading from "components/Loading";

const PageList = ({ type = "page" }) => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.content.list);
  useEffect(() => {
    dispatch(getList({ type }));
  }, [dispatch, type]);
  const { pending, data, error } = list;

  return (
    <Loading isLoading={pending}>
      {error ? (
        <h1 className="PageList__error">{error.message}</h1>
      ) : !data.length ? (
        <h1>No content found.</h1>
      ) : (
        data.map((item, i) => (
          <h1 className="PageList__item" key={`PageList-${i}`}>
            {item.title}
          </h1>
        ))
      )}
    </Loading>
  );
};

PageList.propTypes = {
  type: PropTypes.string,
};

export default PageList;
