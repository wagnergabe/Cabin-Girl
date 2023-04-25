import React from "react";
import { useState } from "react";

const Pics = ({galleryImages}) => {
    const [slideNumber, setSlideNumber] = useState(0)
    const [openModal, setOpenModal] = useState(false)

    return (
        <div> 

            <div className ='galleryWrap'>
                {
                    galleryImages && galleryImages.map((slide, index) => {
                        return(
                            <div className='single' key={index}>
                                <img src={slide.img} alt='cabin' />
                                </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Pics;