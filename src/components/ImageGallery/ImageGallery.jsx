import { useState } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Modal from '../Modal/Modal';
import Style from "./ImageGallery.module.css";

export default function ImageGallery({ items }) {
  const [imageId, setImageId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  function handleClick(id) {
    setImageId(id);
    setShowModal(true);
  }

  const toggleModal = () => {
    setShowModal(prev => !prev);
  };

  return (
    <>
      <ul className={Style.ImageGallery}>
        {items.map((item, id) => (
          <ImageGalleryItem
            key={id}
            item={item}
            onClick={() => {
              handleClick(id);
            }}
          />
        ))}
      </ul>
      {showModal && (
        <Modal onClose={toggleModal}>
          <img
            src={items[imageId].largeImageURL}
            alt={items[imageId].tags}
          />
        </Modal>
      )}
    </>
  );
}
  
ImageGallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};