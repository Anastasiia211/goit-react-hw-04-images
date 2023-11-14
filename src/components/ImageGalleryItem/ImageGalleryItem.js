import { useState } from 'react';
import { BtnClose } from './ImageGalleryItem.styled';
import { BsDoorClosed } from 'react-icons/bs';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

export const ImageGalleryItem = ({ webformatURL, tags }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
    

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    <>
      <img src={webformatURL} alt={tags} onClick={openModal} />
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <img src={webformatURL} alt={tags} />
        <BtnClose type="button" onClick={closeModal}>
          <BsDoorClosed />
        </BtnClose>
      </Modal>
    </>
  );
};