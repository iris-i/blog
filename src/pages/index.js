import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Banner from '../components/banner/Banner'

require('typeface-playfair-display');
require('typeface-lato');

const IndexPage = ({data}) => {
  const {edges: posts} = data.allMarkdownRemark;

  return (
    <Layout>
      <Banner />
      <h2 className = "header__upper">Recent Articles</h2>
      {posts.map (({node: post}) => {
        const {frontmatter} = post;
        return (
          <div>
            <h2>
              <Link to={frontmatter.path}>
                {frontmatter.title}
              </Link>
            </h2>
            <div className = "teaser">
              <p>{frontmatter.date}</p>
              <p className = "teaser__text teaser--home">{frontmatter.intro}</p>
            </div>
          </div>
        );
      })}
    </Layout>
  );

}

export default IndexPage

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            path
            title
            date(formatString: "MMMM DD, YYYY")
            intro
          }
        }
      }
    }
  }
`;
