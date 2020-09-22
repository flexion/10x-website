import React from "react";
import MDX from "@mdx-js/runtime";
import Button from "components/Button";
import Card from "components/Card";
import Date from "components/Date";
import { Grid, Row, Col } from "components/Grid";
import Icon from "components/Icon";
import Image from "components/Image";
import Select from "components/Select";
import LocationMenu from "features/LocationMenu";
import { Link } from "react-router-dom";

export const shortcodes = {
  Button,
  Card,
  Date,
  Grid,
  Icon,
  Image,
  Link,
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
