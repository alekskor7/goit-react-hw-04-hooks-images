import React from 'react';
import PropTypes from 'prop-types';
import Style from "./ImageGalleryItem.module.css";

export default function ImageGalleryItem({ item, onClick }) {
  return (
    <li className={Style.ImageGalleryItem} onClick={onClick}>
      <img
        src={item.webformatURL}
        alt={item.tags}
        className={Style.ImageGalleryItemImage}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  item: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};