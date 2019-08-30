import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from "gatsby"

import Header from './header/header'
import Footer from './footer/Footer'

import '../sass/styles.scss';

const Layout = ({ children, data, page_title, page_description, page_keywords }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={`${data.site.siteMetadata.title} | ${ page_title }`}
          meta={[
            { name: page_title, content: page_description },
            { name: page_keywords, content: page_description },
          ]}
        />
        <Header siteTitle={`${data.site.siteMetadata.title} | ${ page_title }`} />
        <div>
          {children}
        </div>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
