import React from "react";
import MDX from "@mdx-js/runtime";
import Button from "components/Button";
import Card from "components/Card";
import Date from "components/Date";
import { Grid, Row, Col } from "components/Grid";
import Image from "components/Image";
import Select from "components/Select";
import LocationMenu from "features/LocationMenu";

export const shortcodes = {
  Button,
  Card,
  Date,
  Grid,
  Image,
  LocationMenu,
  Row,
  Col,
  Select,
};

const Mdx = ({ children, scope }) => {
  return (
    <MDX components={shortcodes} scope={scope}>
      {children}
    </MDX>
  );
};

export default Mdx;
