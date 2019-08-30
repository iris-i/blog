import React from 'react'
import { Link } from 'gatsby'

import './_footer.scss';

const Footer = (props) => (
  <section className = "footer">
    <footer role = "contentinfo" className = "welcome">
      Proudly powered by <a href = "http://gatsbyjs.org">Gatsby</a>
    </footer>
  </section>
);

export default Footer

