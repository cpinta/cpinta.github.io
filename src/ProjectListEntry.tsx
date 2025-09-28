import React, { useEffect, useRef } from 'react';
import GridItem from './GridItem';
import { href } from 'react-router-dom';
import ProjectListEntryLink from './ProjectListEntryLink';

type ProjectListEntryProps = {
    title: string;
    image: string;
    hover?: string;
    subtitle?: string;
    date?: string;
    descrption: string;
    links?: string[];
    linkText?: string[];
};


function ProjectListEntry({title, image, hover, descrption, links, linkText, subtitle, date}: ProjectListEntryProps) {
    
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
    if(links){
        for(let i = 0; i < links.length; i++){
            linkEntries.push(<ProjectListEntryLink text={linkText ? linkText[i] : 'View'} link={links[i]} />);
        }
    }

    return(
        <table className='ListEntry' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <tbody>
                <tr>
                    <td className='table-title' colSpan={2}>
                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                            <h2>{title}</h2>
                            <p style={{marginLeft: '0.75rem'}}>{subtitle}</p>
                            <p style={{marginLeft: 'auto'}}>{date}</p>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>     
                        <img ref={imgRef} src={image} alt={title} style={{width: 'auto', height: '6rem'}} />
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