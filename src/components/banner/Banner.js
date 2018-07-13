import React from 'react'

import './_banner.scss';

const Banner = (props) => (
  <section className = "hero">
    <div className = "hero__text">
      <h2 className = "hero__title">Hey!</h2>
      I am a Front-End Developer and Drupalista. This is a brain dump of things I learn everyday while working with <a href = "https://civicactions.com/team">these fine folks</a>.
    </div>
  </section>
);

export default Banner

