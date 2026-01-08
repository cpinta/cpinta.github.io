type ProjectListEntryLinkProps = {
    icon: string;
    alt: string;
    link: string;
};

function ProjectListEntryLink({icon, link, alt}: ProjectListEntryLinkProps) {
    return(
        <>
            <button className='ListEntryLink' onClick={(event) => redirect(event, link)} >
                <img src={icon} alt={alt} />
            </button>
        </>
    )
}
function redirect(_event: React.MouseEvent<HTMLButtonElement, MouseEvent>, link: string){
    window.location.href = link
}

export default ProjectListEntryLink;