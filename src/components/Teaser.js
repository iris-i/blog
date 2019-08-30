import React from "react";
import { Link } from 'gatsby'

const Teaser = ({path, title, date, text}) => (
  <div className = "card">
    <div className = "card__content">
      <h2 className = "card__title">
        <Link to={ path }>
          { title }
        </Link>
      </h2>
      <div className = "teaser">
        <p className = "card__date">{ date }</p>
        <p className = "teaser__text teaser--home card__summary">{ text }</p>
      </div>
    </div>
  </div>
);

export default Teaser;
