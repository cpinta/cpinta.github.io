interface SectionButtonProps{
    displayText: string;
    pathPage: string;
}

function SectionButton({displayText} : SectionButtonProps){
    return(
        <>
            <button>
                {displayText}
            </button>
        </>
    )
}

export default SectionButton;