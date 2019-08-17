import React from 'react';
import PropTypes from 'prop-types';

const Curso = ({title,image,price,profesor}) => (
    <article className="card" id={title}>
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">         
          <img src={image} />
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
          <h3 className="center">{title}</h3>  
          <div className="s-main-center">
            {`Prof.: ${profesor}`}
          </div>
          <div className="s-main-center">
            <a className="button--ghost-alert button--tiny" href="#">{`$${price} USD`}</a>
          </div>
        </div>
      </article>
)

Curso.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  profesor: PropTypes.string
}

Curso.defaultProps = {
  title: "No hay título",
  image: "data:image/jpeg;base64,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",
  price: "--",
  profesor: ""
}


export default Curso;