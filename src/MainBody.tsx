import React from 'react';
import ImgSeq from './ImageSequence';
import SectionSelector from './SectionSelector';

function MainBody(){
    return(
        <section className="MainBody">
            <section className="MainCenterSection">
                <ImgSeq />
                <SectionSelector />
            </section>
        </section>
    )
}

export default MainBody;