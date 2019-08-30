import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Banner from '../components/banner/Banner'
import Teaser from '../components/Teaser'

require('typeface-playfair-display');
require('typeface-lato');

const IndexPage = ({data}) => {
  const {edges: posts} = data.allMarkdownRemark;
  const articleTeasers =
    data === null ? "No Articles yet" :
      posts.map (({node: post}) => {
      const {frontmatter} = post;
      const {path, title, date, intro } = frontmatter;
      return (
        <Teaser
          path = { path }
          title = { title }
          date = { date }
          text = { intro }
        />
      );
  });

  return (
    <Layout
      page_title = "Front End Developer and Drupalista"
      page_description = "I am a Front-End Developer and Drupalista. This is a brain dump of things I learn everyday"
    >
      <Banner
        title = "Hey!"
        text = 'I am a Front-End Developer and Drupalista. This is a brain dump of things I learn everyday while working with these'
        link = 'https://civicactions.com'
        isHome = { true }
      />
      <main className = "layout-container">
        <h2 className = "header__upper">Recent Articles</h2>
        <section className = "card--wrapper">
          {articleTeasers}
        </section>
      </main>
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
