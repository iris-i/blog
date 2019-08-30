import React from 'react'

import './_banner.scss';

const Banner = ({title, text, link, isHome, bg}) => {
  const workLink =
      (link && text) ? <a href={ link }> fine folks.</a> :
      (!text && !link ) ? '': '.';

  const socialLinks = isHome ? <p className="small">
    <a href="https://github.com/iris-i">Github</a>
    <a href="https://www.linkedin.com/in/irisibekwe/">LinkedIn</a>
    <a href="https://codepen.io/irisibk/">CodePen</a>
  </p> : null;

  const animationClass = isHome ? 'hero--wrapper--animated' : `hero--wrapper ${ bg }`;

  if(isHome) {

  }

  return (
    <section
      className={ animationClass }

    >
      <div className="hero">
        <div className="hero__text">
          <h2 className="hero__title">{ title }</h2>
          { text }{ workLink }
          { socialLinks }
        </div>
      </div>
    </section>
  )
};

export default Banner;

