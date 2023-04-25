import React from 'react';
import cabin from '../assets/images/cabin-wi.jpg';
import coHouse from '../assets/images/co-house.jpg';
import sdhome from '../assets/images/sdhome.webp';
import tingreen from '../assets/images/tingreen.jpg';

import Pics from '../components/Pics';



const Gallery = () => {

    const galleryImages = [
        {
            img: cabin
        },
        {
            img: coHouse
        },
        {
            img: sdhome
        },
        {
            img: tingreen
        }
    ]

    return (
        <div>
            <Pics galleryImages ={galleryImages} />
            </div>
    )
}


export default Gallery;