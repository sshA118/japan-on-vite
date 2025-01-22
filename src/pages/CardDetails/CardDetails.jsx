import { useState } from 'react';
import { useParams } from 'react-router-dom';
import useCardData from '../../components/pages/CardDetails/UserCardData';
import ImageGallery from '../../components/pages/CardDetails/ImageGallery';
import Modal from '../../components/pages/CardDetails/Modal';
import Comments from '../../components/pages/CardDetails/Comments';
import './CardDetails.css'
import LoaderDetail from '../../components/Loader/LoaderDetail';

const CardDetails = () => {
    const { id } = useParams();
    const { cardData, loading } = useCardData(id);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState('');
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    if (loading) return <LoaderDetail/>;

    const images = [cardData.image1, cardData.image2, cardData.image3];

    const handleThumbnailClick = (image) => {
        setCurrentImage(image);
        setCurrentImageIndex(images.indexOf(image));
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handlePrevImage = () => {
        const prevIndex = (currentImageIndex - 1 + images.length) % images.length;
        setCurrentImage(images[prevIndex]);
        setCurrentImageIndex(prevIndex);
    };

    const handleNextImage = () => {
        const nextIndex = (currentImageIndex + 1) % images.length;
        setCurrentImage(images[nextIndex]);
        setCurrentImageIndex(nextIndex);
    };

    return (
      <>
        <Modal
          isOpen={isModalOpen}
          currentImage={currentImage}
          images={images}
          onClose={handleCloseModal}
          onPrev={handlePrevImage}
          onNext={handleNextImage}
          onThumbnailClick={handleThumbnailClick}
        />
        <ImageGallery images={images} onThumbnailClick={handleThumbnailClick} />
        <div className="block">
          <div className="block__text">
            <div className="block__text__title">
              <h3>{cardData.title}</h3>
            </div>
            <div className="block__text__text">
              <p className="block__text-p">{cardData.detail}</p>
            </div>
          </div>
        </div>
        <div className="coments">
          <h1>Комментарии</h1>
        </div>
        <Comments cardId={id} />
      </>
    );
};

export default CardDetails;