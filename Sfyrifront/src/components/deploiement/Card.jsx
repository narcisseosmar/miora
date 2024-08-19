import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { domain, repository, image } = this.props;

    return (
      <div className="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:flex-row">
        <img
          className="h-48 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src="https://ui-avatars.com/api/?name=Image+Docker&background=random"
          alt=""
        />
        <div className="flex flex-col p-6 w-full bg-slate-50">
          
          <p className="mb-4 text-base text-neutral-600">
            <span className="font-semibold">Domain:</span> {domain}
          </p>
          <p className="mb-4 text-base text-neutral-600 ">
            <span className="font-semibold">Image docker:</span> {image}
          </p>
          <p className="mb-4 text-base text-neutral-600 ">
            <span className="font-semibold">Repos:</span> {repository}
          </p>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  domain: PropTypes.string.isRequired,
  repository: PropTypes.string.isRequired,
  image:PropTypes.string.isRequired,
};

export default Card;
