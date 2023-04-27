import React from "react";
import { useState } from "react";
import { AiOutlineClose, AiOutlineLeft, AiOutlineRight } from "react-icons/ai"

const Pics = ({ galleryImages }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  
  const handleOpenModal = (index) => {
    setSlideNumber(index)
    setOpenModal(true)
  }

  // Close Modal
  const handleCloseModal = () => {
    setOpenModal(false)
  }

  // Previous Image
  const prevSlide = () => {
    slideNumber === 0 
    ? setSlideNumber( galleryImages.length -1 ) 
    : setSlideNumber( slideNumber - 1 )
  }

  // Next Image  
  const nextSlide = () => {
    slideNumber + 1 === galleryImages.length 
    ? setSlideNumber(0) 
    : setSlideNumber(slideNumber + 1)
  }

  return (
    <div>

      {openModal && 
        <div className='sliderWrap'>
          <AiOutlineClose icon={AiOutlineClose} className='btnClose' onClick={handleCloseModal}  />
          <AiOutlineLeft icon={AiOutlineLeft} className='btnPrev' onClick={prevSlide} />
          <AiOutlineRight icon={AiOutlineRight} className='btnNext' onClick={nextSlide} />
          <div className='fullScreenImage'>
            <img src={galleryImages[slideNumber].img} alt='' />
          </div>
        </div>
      }

  
    <div>
      <div className="galleryWrap">
        {galleryImages &&
          galleryImages.map((slide, index) => {
            return (
              <div className="single" key={index}
              onClick={ () => handleOpenModal(index)}>
                <img src={slide.img} alt="cabin" />
              </div>
            );
          })}
      </div>
    </div>
    /</div>
  )
        }

export default Pics;
