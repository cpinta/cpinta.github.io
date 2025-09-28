import React from 'react';
import SectionButton from './SectionButton';

function SectionSelector(){
    return(
        <section className="SectionSelector">
            <SectionButton displayText='PROJECTS' pathPage='' />
            <SectionButton displayText='VIDEO' pathPage='' />
            <SectionButton displayText='RESUME' pathPage='' />
        </section>
    )
}

export default SectionSelector;