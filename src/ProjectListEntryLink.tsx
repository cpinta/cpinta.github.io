type ProjectListEntryLinkProps = {
    text: string;
    link: string;
};

function ProjectListEntryLink({text, link}: ProjectListEntryLinkProps) {
    return(
        <>
            <a className='ListEntryLink' href={link} {...({ target: "_blank", rel: "noopener noreferrer" })} >{text}</a>
        </>
    )
}

export default ProjectListEntryLink;