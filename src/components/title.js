import React from "react";
import { StaticQuery, graphql } from "gatsby";

const Title = () => (
  <StaticQuery
    query={graphql`
      query {
        contentfulMainPage {
          title
        }
      }
    `}
    render={data => <h1>{data.contentfulMainPage.title}</h1>}
  />
);
export default Title;
