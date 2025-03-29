import React from 'react';

interface SectionButtonProps{
    displayText: string;
    pathPage: string;
}

function SectionButton({displayText, pathPage} : SectionButtonProps){
    return(
        <>
            <button>
                {displayText}
            </button>
        </>
    )
}

export default SectionButton;