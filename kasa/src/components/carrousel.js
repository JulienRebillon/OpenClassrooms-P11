import React, { useState } from "react";
import '../styles/carrousel.css';
import ArrowLeft from '../images/Arrow-left.png';
import ArrowRight from '../images/Arrow-Right.png';

function Slider ({pictures}) {

    const [index, setIndex] = useState(0)  // Counter initialisation
    const totalPictures = pictures.length-1 // max nnumber of images

    if (index < 0) setIndex(totalPictures)  // 
    if (index > totalPictures) setIndex(0)  // reset counter to return to the beginning

    return(
        <div className='slider'>

            
            <div className='div-image'>  
                <img src={pictures[index]} className="classImage" key={"car-"+index} alt={"photo "+index} />
            </div>

            
            {totalPictures > 0 && ( 
                <div> 
                    <button onClick={() => setIndex(index - 1)}>{index}
                        <img src={ArrowLeft} className='classArrowLeft' alt={'image précedante '+index} />
                    </button>
                    <button onClick={() => setIndex(index + 1)}>{index}
                        <img src={ArrowRight} className='classArrowRight' alt={'image suivante '+index} />
                    </button>
                </div>
            )}
            {totalPictures > 0 && (
                
                <div className='div-counter'> 
                    <p className='imagesCounter'>
                        {index+1}/{totalPictures+1}
                    </p>
                </div>
            )}
        </div>
    )

}



export default Slider;