// Template for displaying individual team-member content

import React from 'react';
import Helmet from 'react-helmet'
import { graphql } from 'gatsby';
import Header from './../components/header/header'
import Banner from './../components/banner/Banner'
import Layout from '../components/layout'

export default function Template({data}) {
  const{ markdownRemark: article } = data;
  const{ frontmatter, html, excerpt } = article;
  const{ title, date, intro } = frontmatter;

  const bgClasses = ['bubbles', 'temple', 'architect', 'jigsaw' ];
  // Choose random svg bg
  const randomBg = bgClasses[Math.floor(Math.random()*bgClasses.length)];

  return (
    <div>
      { /* Helmet is used to set page title and meta.
        Details here: https://github.com/nfl/react-helmet */
      }
      <Layout
        page_title = {title}
        page_description = { intro }
      >
        <Banner
          title = {title}
          text = {intro}
          isHome = { false }
          bg = { randomBg }
        />
        <main className = "layout-container">
          <p dangerouslySetInnerHTML = {{__html: html}} />
        </main>
      </Layout>
    </div>
  );
};

// Query for case study content. This rarely needs to be changed
export const articleQuery = graphql `
  query ArticleByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      excerpt
      frontmatter {
        path
        title
        date
        intro
      }
    }
  }
`;