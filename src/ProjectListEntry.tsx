import React, { useRef } from 'react';
import ProjectListEntryLink from './ProjectListEntryLink';

type ProjectListEntryProps = {
    title: string;
    image: string;
    hover?: string;
    subtitle?: string;
    date?: string;
    descrption: string;
    linkIcons?: { icon: string; link: string; alt: string }[];
    cssClass?: string;
};


function ProjectListEntry({title, image, hover, descrption, linkIcons, subtitle, date, cssClass}: ProjectListEntryProps) {
    
    const imgRef = useRef<HTMLImageElement>(null);

    function handleMouseEnter() {
        if (imgRef.current) {
            if(hover){
                imgRef.current.src = hover;
            }
        }
    }

    function handleMouseLeave() {
        if (imgRef.current) {
            if(image){
                imgRef.current.src = image;
            }
        }
    }

    var linkEntries: React.ReactElement[] = [];
    if(linkIcons){
        for(let i = 0; i < linkIcons.length; i++){
            linkEntries.push(<ProjectListEntryLink icon={linkIcons[i].icon} link={linkIcons[i].link} alt={linkIcons[i].alt}/>);
        }
    }

    return(
        <table className={'ListEntry'+ (cssClass? ' '+cssClass : '')} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <tbody>
                <tr>
                    <td className='table-title' colSpan={2}>
                        <div className='ListEntryHeader'>
                            <h2>{title}</h2>
                            <p className='ListEntryHSubtitle'>{subtitle}</p>
                            <p className='ListEntryHDate'>{date}</p>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td className='ListEntryIconParent'>
                        <img className='ListEntryIcon' ref={imgRef} src={image} alt={title} />
                    </td>
                    <td className='table-desc'>
                        <p>{descrption}</p>
                        <div>
                            {linkEntries}
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}


export default ProjectListEntry;